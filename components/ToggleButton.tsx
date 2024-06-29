import React, { useState } from 'react';

type ToggleButtonProps = {
  label: string;
  onToggle: (isToggled: boolean) => void;
};

export default function ToggleButton({ label, onToggle }: ToggleButtonProps) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    const newToggleState = !isToggled;
    setIsToggled(newToggleState);
    onToggle(newToggleState);
  };

  return (
    <div className="flex items-center space-x-3">
      
      <button
        onClick={handleToggle}
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isToggled ? 'bg-indigo-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            isToggled ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>

      <span className="text-lg font-lg text-gray-700">{label}</span>
    </div>
  );
}
