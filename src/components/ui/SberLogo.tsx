
import React from "react";

const SberLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M24 0C10.745 0 0 10.745 0 24C0 37.255 10.745 48 24 48C37.255 48 48 37.255 48 24C48 10.745 37.255 0 24 0Z" 
        fill="#21A038"
      />
      <path 
        d="M40.500 24C40.500 33.113 33.113 40.5 24 40.5C14.887 40.5 7.5 33.113 7.5 24C7.5 14.887 14.887 7.5 24 7.5C33.113 7.5 40.5 14.887 40.5 24Z" 
        fill="white"
      />
      <path 
        d="M36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C30.627 12 36 17.373 36 24Z" 
        fill="#21A038"
      />
      <path 
        d="M24 48C37.255 48 48 37.255 48 24L36 24C36 30.627 30.627 36 24 36L24 48Z" 
        fill="url(#paint0_linear)"
      />
      <path 
        d="M0 24C0 37.255 10.745 48 24 48L24 36C17.373 36 12 30.627 12 24L0 24Z" 
        fill="url(#paint1_linear)"
      />
      <path 
        d="M24 0C10.745 0 0 10.745 0 24L12 24C12 17.373 17.373 12 24 12L24 0Z" 
        fill="url(#paint2_linear)"
      />
      <path 
        d="M24 12C30.627 12 36 17.373 36 24L48 24C48 10.745 37.255 0 24 0L24 12Z" 
        fill="url(#paint3_linear)"
      />
      <defs>
        <linearGradient 
          id="paint0_linear" 
          x1="30" 
          y1="42" 
          x2="42" 
          y2="30" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21A038"/>
          <stop offset="1" stopColor="#21A038" stopOpacity="0"/>
        </linearGradient>
        <linearGradient 
          id="paint1_linear" 
          x1="18" 
          y1="42" 
          x2="6" 
          y2="30" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21A038"/>
          <stop offset="1" stopColor="#21A038" stopOpacity="0"/>
        </linearGradient>
        <linearGradient 
          id="paint2_linear" 
          x1="6" 
          y1="18" 
          x2="18" 
          y2="6" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21A038"/>
          <stop offset="1" stopColor="#21A038" stopOpacity="0"/>
        </linearGradient>
        <linearGradient 
          id="paint3_linear" 
          x1="42" 
          y1="18" 
          x2="30" 
          y2="6" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21A038"/>
          <stop offset="1" stopColor="#21A038" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SberLogo;
