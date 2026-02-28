import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { Link } from "react-router-dom";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
  to?: string;
  href?: string;
  children?: React.ReactNode;
}

export function Button({ variant = "primary", className = "", children, to, href, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out rounded-pill focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-text text-surface hover:bg-text/90 hover:-translate-y-[2px] hover:shadow-md px-6 py-3 text-sm",
    secondary: "bg-transparent border border-border text-text hover:border-text hover:bg-black/5 px-6 py-3 text-sm",
    ghost: "bg-transparent text-text hover:bg-black/5 px-4 py-2 text-sm",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={classes} 
      {...props}
    >
      {children}
    </motion.button>
  );
}
