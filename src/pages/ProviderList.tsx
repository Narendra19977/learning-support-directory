import { Fragment, useContext, useState } from "react";
import { ProviderContext } from "../contexts/providerContext";
import ProviderCard from "../components/ProviderCard";
import Loader from "../components/Loader";

const ProviderListPage = () => {
  const { providers, loading,err } = useContext(ProviderContext);
  const [search, setSearch] = useState("");

  const filteredProviders = providers.filter((provider) =>
    `${provider.name} ${provider.specialization}`.toLowerCase().includes(search.toLowerCase())
  );
  if(err){
    return <Fragment>{JSON.stringify(err)}</Fragment>
  }
  if (loading) return <Loader/>;

return (
  <div className="page-container">
    <h1 className="page-title">Learning Support Providers</h1>
    <input
      className="search-input"
      type="text"
      placeholder="Search by name or specialization"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <div className="provider-grid" style={{marginTop:10}}>
      {filteredProviders.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  </div>
);

};

export default ProviderListPage;