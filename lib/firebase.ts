import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, query, where, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Data validation schemas
export interface PreRegistrationData {
  fullName: string;
  email: string;
  platform?: string; // Made optional since dropdown is hidden
  agreeToUpdates: boolean;
  registeredAt: string;
}

// Email normalization function to handle Gmail plus addressing
export const normalizeEmail = (email: string): string => {
  const trimmedEmail = email.toLowerCase().trim();
  
  // Handle Gmail plus addressing
  if (trimmedEmail.includes('@gmail.com')) {
    const [localPart, domain] = trimmedEmail.split('@');
    const baseLocalPart = localPart.split('+')[0]; // Remove everything after +
    return `${baseLocalPart}@${domain}`;
  }
  
  // Handle Google Workspace (formerly G Suite) plus addressing
  if (trimmedEmail.includes('@googlemail.com')) {
    const [localPart, domain] = trimmedEmail.split('@');
    const baseLocalPart = localPart.split('+')[0]; // Remove everything after +
    return `${baseLocalPart}@gmail.com`; // Convert to gmail.com
  }
  
  return trimmedEmail;
};

// Validation function
export const validatePreRegistrationData = (data: PreRegistrationData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push("Full name must be at least 2 characters long");
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Please enter a valid email address");
  }
  
  // Platform validation removed since dropdown is hidden
  // if (!data.platform) {
  //   errors.push("Please select a platform");
  // }
  
  if (!data.agreeToUpdates) {
    errors.push("You must agree to receive updates");
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Check for duplicate email with proper normalization
export const checkDuplicateEmail = async (email: string): Promise<boolean> => {
  try {
    const normalizedEmail = normalizeEmail(email);
    const preregistrationsRef = collection(db, "preregistrations");
    const q = query(preregistrationsRef, where("email", "==", normalizedEmail));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking duplicate email:", error);
    return false;
  }
};

export default app;