import { Fragment, useContext, useMemo, useState } from "react";
import { ProviderContext } from "../../contexts/providerContext";
import ProviderCard from "../../components/ProviderCard/ProviderCard";
import Loader from "../../components/Loader/Loader";
import styles from "./ProviderList.module.css";
import debounce from "../../utils/debounce";

const ProviderListPage = () => {
  const { providers, loading, err } = useContext(ProviderContext);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ✅ Memoize debounced setter
  const debouncedSetSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearch(value);
      }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSetSearch(e.target.value);
  };

  const filteredProviders = providers.filter((provider) =>
    `${provider.name} ${provider.specialization}`
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  if (err) {
    return <Fragment>{JSON.stringify(err)}</Fragment>;
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Learning Support Providers</h1>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by name or specialization"
        value={search}
        onChange={handleChange}
      />
      <div className={styles.providerGrid} style={{ marginTop: 10 }}>
        {loading ? (
          <Loader />
        ) : filteredProviders.length > 0 ? (
          filteredProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))
        ) : (
          <h2>No providers found</h2>
        )}
      </div>
    </div>
  );
};

export default ProviderListPage;
