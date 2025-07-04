import React, { useEffect } from 'react';
import { Button } from './button';
import { Input } from './input';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl heading-primary bg-gradient-to-b from-[#edc84f] to-[#c79c27] bg-clip-text text-transparent">
            {title}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <X size={20} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

interface PreRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreRegistrationModal: React.FC<PreRegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    platform: '',
    agreeToUpdates: false
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ fullName: '', email: '', platform: '', agreeToUpdates: false });
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Success!">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl heading-secondary text-white mb-2">Registration Successful!</h3>
          <p className="text-gray-300 text-body">
            Welcome to the MYRK community! You'll receive exclusive updates and early access information.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Pre-Register for MYRK">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-[#ffffff08] border-[#ffffff15] text-white placeholder-gray-400 focus:border-[#edc84f] focus:ring-[#edc84f]"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#ffffff08] border-[#ffffff15] text-white placeholder-gray-400 focus:border-[#edc84f] focus:ring-[#edc84f]"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-gray-300 mb-2">
            Preferred Platform
          </label>
          <select
            id="platform"
            name="platform"
            required
            value={formData.platform}
            onChange={handleChange}
            className="w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-3 py-2 text-white focus:border-[#edc84f] focus:ring-[#edc84f] focus:outline-none"
          >
            <option value="">Select your platform</option>
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            id="agreeToUpdates"
            name="agreeToUpdates"
            type="checkbox"
            required
            checked={formData.agreeToUpdates}
            onChange={handleChange}
            className="w-4 h-4 text-[#edc84f] bg-[#ffffff08] border-[#ffffff15] rounded focus:ring-[#edc84f] focus:ring-2"
          />
          <label htmlFor="agreeToUpdates" className="ml-2 text-sm text-gray-300">
            I agree to receive updates and exclusive content about MYRK
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-black text-lg py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Registering...
            </div>
          ) : (
            'Complete Registration'
          )}
        </Button>
      </form>
    </Modal>
  );
};