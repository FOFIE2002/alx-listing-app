import React from 'react';
import { CardProps } from '../../interfaces/index';

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded-lg shadow-md p-4">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
