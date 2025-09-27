import React from 'react';
import { Button } from './button';
import { CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  userName?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ 
  isOpen, 
  onClose, 
  title = "Registration Successful!",
  message = "Welcome to the MYRK community! You'll receive exclusive updates and early access information.",
  userName
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#1a1a2e] border border-[#edc84f40] rounded-2xl p-6 shadow-2xl">
        <DialogHeader className="text-center">
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <DialogTitle className="text-xl font-semibold text-white mb-2 [font-family:'Orbitron',Helvetica]">
            {title}
          </DialogTitle>
          
          {userName && (
            <p className="text-[#edc84f] text-lg mb-3 [font-family:'Oxanium',Helvetica]">
              Welcome, {userName}!
            </p>
          )}
          
          <DialogDescription className="text-gray-300 text-sm leading-relaxed [font-family:'Oxanium',Helvetica] mb-6">
            {message}
          </DialogDescription>
        </DialogHeader>
        
        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={onClose}
            className="w-full h-[50px] rounded-lg bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] [font-family:'Oxanium',Helvetica] font-normal text-black text-base hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Continue Exploring
          </Button>
          
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm transition-colors [font-family:'Oxanium',Helvetica]"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
