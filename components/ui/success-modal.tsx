import React from 'react';
import { Button } from './button';
import { CheckCircle, X } from 'lucide-react';

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#ffffff0d] border border-[#ffffff1a] rounded-2xl p-6 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2 [font-family:'Orbitron',Helvetica]">
            {title}
          </h3>
          
          {userName && (
            <p className="text-[#edc84f] text-lg mb-3 [font-family:'Oxanium',Helvetica]">
              Welcome, {userName}!
            </p>
          )}
          
          <p className="text-gray-300 text-sm leading-relaxed [font-family:'Oxanium',Helvetica] mb-6">
            {message}
          </p>
          
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
        </div>
      </div>
    </div>
  );
};
