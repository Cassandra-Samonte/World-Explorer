import React from 'react';
import myLogo from '../../assets/world-logo.png'; 

export default function FooterSection() {
  return (
    <div className="flex justify-center items-center pb-8">
      <img src={myLogo} alt="World Explorer Logo" className="w-14 h-14" />
    </div>
  );
}
