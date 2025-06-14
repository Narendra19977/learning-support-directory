import React from 'react';
import { useNavigate } from 'react-router-dom';
import {type Provider } from '../types/provider.type';

type Props = { provider: Provider };

const ProviderCard: React.FC<Props> = ({ provider }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded p-4 hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/providers/${provider.id}`)}>
      <h2 className="text-lg font-semibold">{provider.name}</h2>
      <p>{provider.specialization}</p>
      <p>{provider.location}</p>
      <p>⭐ {provider.rating}</p>
    </div>
  );
};

export default ProviderCard;