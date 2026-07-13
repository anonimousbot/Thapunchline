/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoIconProps {
  className?: string;
}

export function LogoIcon({ className = "w-10 h-10" }: LogoIconProps) {
  return (
    <svg 
      id="thapunchline-logo-icon"
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle background in brand green */}
      <circle cx="50" cy="50" r="48" fill="#00a651" />
      
      {/* Capital P with hollow loop */}
      <path
        d="M 32,24 h 24 c 10,0 16,6 16,16 c 0,10 -6,16 -16,16 H 48 v 20 c 0,1.1 -0.9,2 -2,2 h -12 c -1.1,0 -2,-0.9 -2,-2 V 24 Z M 48,34 h 8 c 4.4,0 6,2.5 6,6 c 0,3.5 -1.6,6 -6,6 h -8 V 34 Z"
        fill="white"
        fillRule="evenodd"
      />
      
      {/* Three vertical punch holes in the stem */}
      <circle cx="40" cy="59" r="1.8" fill="#00a651" />
      <circle cx="40" cy="65" r="1.8" fill="#00a651" />
      <circle cx="40" cy="71" r="1.8" fill="#00a651" />
    </svg>
  );
}

