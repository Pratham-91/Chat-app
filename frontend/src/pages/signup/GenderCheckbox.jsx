import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-6 justify-center">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer rounded-full px-4 py-2 transition-all duration-200 ${
            selectedGender === 'male'
              ? 'bg-blue-500/80 text-white shadow-md scale-105'
              : 'bg-white/30 text-blue-900'
          }`}
        >
          <span className="label-text font-semibold">Male</span>
          <input
            type="checkbox"
            className="checkbox border-blue-700 accent-blue-500"
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer rounded-full px-4 py-2 transition-all duration-200 ${
            selectedGender === 'female'
              ? 'bg-pink-500/80 text-white shadow-md scale-105'
              : 'bg-white/30 text-pink-900'
          }`}
        >
          <span className="label-text font-semibold">Female</span>
          <input
            type="checkbox"
            className="checkbox border-pink-700 accent-pink-500"
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;