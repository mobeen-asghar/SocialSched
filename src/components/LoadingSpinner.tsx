import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-animated flex items-center justify-center">
      <div className="glass-card p-8 rounded-2xl flex flex-col items-center space-y-4">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
        <p className="text-white/90 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;