import React from 'react';

interface Props {
   fill?: string;
   size?: number;
   width?: number;
   height?: number;
   css?: React.CSSProperties; // Add this line to accept custom styles
}

export const TiktokIcon = ({
   fill,
   size,
   width = 24,
   height = 24,
   css, // Add this line to accept custom styles
   ...props
}: Props) => {
   return (
      <svg
        width={size || width || 24}
        height={size || height || 24}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
          fill={fill}
        />
      </svg>
    );
  };