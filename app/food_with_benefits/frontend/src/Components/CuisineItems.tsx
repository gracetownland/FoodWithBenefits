import React from 'react';

interface CuisineCardProps {
  name: string;
  imageUrl: string;
  description?: string;
}

const CuisineCard: React.FC<CuisineCardProps> = ({ name, imageUrl, description }) => {
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-200">
      <img className="w-full h-40 object-cover" src={imageUrl} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        {description && <p className="text-gray-600 mt-2 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default CuisineCard;