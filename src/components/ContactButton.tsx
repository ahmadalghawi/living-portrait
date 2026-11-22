import React from 'react';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className = '', onClick, href }) => {
  const content = (
    <span className="relative z-10 block pointer-events-none">
      Contact me
    </span>
  );

  const baseClasses = `
    contact-btn contact-btn-glow
    group relative inline-flex items-center justify-center
    rounded-full cursor-pointer select-none
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-xs sm:text-sm md:text-base
    font-semibold
    transition-all duration-300 ease-out
    hover:scale-[1.03] active:scale-[0.98]
    ${className}
  `;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};
