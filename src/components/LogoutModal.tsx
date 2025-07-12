import React from 'react';
import { LogOut, X } from 'lucide-react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 safe-area-inset-top safe-area-inset-bottom">
      <div className="modal-responsive glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl card-float">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg flex items-center justify-center">
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">Confirm Logout</h2>
          </div>
          <button
            onClick={onClose}
            className="glass-button p-2 rounded-lg hover:bg-white/20 transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>
        </div>
        
        <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed">
          Are you sure you want to log out? You'll need to sign in again to access your account.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={onClose}
            className="flex-1 glass-button px-4 py-3 rounded-lg text-white/90 hover:bg-white/20 transition-all duration-200 text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-gradient-to-r from-red-500/80 to-red-600/80 px-4 py-3 rounded-lg text-white font-medium hover:from-red-500 hover:to-red-600 transition-all duration-200 text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;