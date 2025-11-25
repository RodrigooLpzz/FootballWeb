// components/BackButton.tsx

"use client"; 

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  return (
    <button 
      onClick={handleBack} 
      className="back-button"
    >
      Back to search other player
    </button>
  );
}