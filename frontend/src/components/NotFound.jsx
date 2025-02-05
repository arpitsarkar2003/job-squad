import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-red-500/5 to-background relative overflow-hidden flex items-center justify-center">
      {/* Background SVG Patterns */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-red-500/5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#circles)" />
      </svg>

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background to-transparent" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto p-6 text-center">
        <div className="bg-background/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-red-500/10">
          <div className="w-24 h-24 mx-auto mb-8 relative">
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500" strokeDasharray="70 30" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <Button
            variant="outline"
            className="gap-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
