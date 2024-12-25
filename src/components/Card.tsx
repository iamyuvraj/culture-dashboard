import React from 'react';

interface CardProps {
  title: string;
  value: string | number;
}

const Card: React.FC<CardProps> = ({ title, value }) => (
  <div className="bg-white shadow rounded p-4 text-center">
    <h3 className="text-gray-600 text-sm">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default Card;
