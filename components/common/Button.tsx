import React from 'react';
import { ButtonProps } from '../../interfaces/index';

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
  >
    {label}
  </button>
);

export default Button;
