import React from 'react';
import { useNavigate } from 'react-router-dom';
import { type Provider } from '../types/provider.type';
import './ProviderCard.css'; // <-- Import the CSS file

type Props = { provider: Provider };

const ProviderCard: React.FC<Props> = ({ provider }) => {
  const navigate = useNavigate();

  return (
    <div
      className="provider-card"
      onClick={() => navigate(`/providers/${provider.id}`)}
    >
      <h2>{provider.name}</h2>
      <p>{provider.specialization}</p>
      <p>{provider.location}</p>
      <p>⭐ {provider.rating}</p>
    </div>
  );
};

export default ProviderCard;
