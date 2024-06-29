import React, { useState } from 'react';
import "../app/globals.css"

type PercentageSliderProps = {
  onChange: (value: number) => void;
};

export default function PercentageSlider({ onChange }: PercentageSliderProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center space-x-3 mt-28 md:mt-0">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <span className="text-sm font-medium text-blue-600">{value}%</span>
    </div>
  );
}
