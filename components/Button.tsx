import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  
  const variants = {
    primary: "border-transparent text-slate-900 bg-primary hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    secondary: "border-transparent text-slate-900 bg-secondary hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]",
    outline: "border-primary text-primary bg-transparent hover:bg-primary/10",
    ghost: "border-transparent text-textMain hover:text-primary hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;