
import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';

interface AIChatButtonProps {
  onClick: () => void;
}

const AIChatButton: React.FC<AIChatButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="AIアシスタントを開く"
    >
      <SparklesIcon className="h-8 w-8" />
    </button>
  );
};

export default AIChatButton;
