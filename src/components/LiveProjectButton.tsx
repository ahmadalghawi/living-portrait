import React from 'react';

interface LiveProjectButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  className = '',
  onClick,
  href,
  label = 'Live Project',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full border-2 border-[#D7E2EA]
    text-[#D7E2EA] font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    transition-all duration-300 ease-out
    hover:bg-[#D7E2EA]/10 hover:scale-[1.02] active:scale-[0.98]
    cursor-pointer select-none
    ${className}
  `;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={baseClasses}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
};
