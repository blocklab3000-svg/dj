import React from 'react';

interface BeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  themeColor: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const BeamButton: React.FC<BeamButtonProps> = ({ 
  children, 
  themeColor, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const isPrimary = variant === 'primary';
  
  // Dynamic style for the glow color based on prop
  const glowStyle = {
    background: isPrimary 
      ? `linear-gradient(to right, ${themeColor}, #ffffff, ${themeColor})`
      : `linear-gradient(to right, #333, #666, #333)`
  };

  return (
    <div className={`relative group ${fullWidth ? 'w-full' : 'w-fit'} ${className}`}>
      {/* The moving beam border */}
      <div 
        className="absolute -inset-0.5 rounded-lg opacity-75 blur-sm transition duration-200 group-hover:opacity-100"
        style={{
          ...glowStyle,
          backgroundSize: '200% 100%',
          animation: 'beam 2s linear infinite'
        }}
      />
      
      {/* The Button Content */}
      <button
        className={`relative flex items-center justify-center rounded-lg px-8 py-4 font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
          isPrimary 
            ? 'bg-black text-white hover:bg-zinc-900' 
            : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-700'
        } ${fullWidth ? 'w-full' : ''}`}
        {...props}
      >
        {children}
      </button>

      <style>{`
        @keyframes beam {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
};

export default BeamButton;