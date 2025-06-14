import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProviderContext } from "../contexts/providerContext";
import "./ProviderDetailPage.css";
import Loader from "../components/Loader";

const ProviderDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { providers, loading } = useContext(ProviderContext);

  if (loading) return <Loader/>

  const provider = providers.find((provider) => provider.id === Number(id));

  if (!provider) {
    return (
      <div className="p-4">
        <p>Provider not found.</p>
        <button className="mt-2 text-blue-500" onClick={() => navigate("/")}>
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to List
      </button>
      <h1 className="provider-title">{provider.name}</h1>
      <div className="provider-info">
        <p>
          <strong>Specialization:</strong> {provider.specialization}
        </p>
        <p>
          <strong>Location:</strong> {provider.location}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {provider.rating}
        </p>
        <p>
          <strong>Description:</strong> {provider.longDescription}
        </p>
        <p>
          <strong>Email:</strong> {provider.contactEmail}
        </p>
        <p>
          <strong>Phone:</strong> {provider.phoneNumber}
        </p>
      </div>
    </div>
  );
};

export default ProviderDetailPage;
