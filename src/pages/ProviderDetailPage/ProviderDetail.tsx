import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProviderContext } from "../../contexts/providerContext";
import styles from "./ProviderDetailPage.module.css";
import Loader from "../../components/Loader";

const ProviderDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { providers, loading } = useContext(ProviderContext);

  if (loading) return <Loader />;

  const provider = providers.find((provider) => provider.id === Number(id));

  if (!provider) {
    return (
      <div className={styles.detailContainer}>
        <p>Provider not found.</p>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        ← Back to List
      </button>
      <h1 className={styles.providerTitle}>{provider.name}</h1>
      <div className={styles.providerInfo}>
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
