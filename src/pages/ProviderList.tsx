import { useContext, useState } from "react";
import { ProviderContext } from "../context/providerContext";
import ProviderCard from "../components/ProviderCard";

const ProviderListPage = () => {
  const { providers, loading } = useContext(ProviderContext);
  const [search, setSearch] = useState("");

  const filteredProviders = providers.filter((provider) =>
    `${provider.name} ${provider.specialization}`.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading providers...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Learning Support Providers</h1>
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        placeholder="Search by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProviders.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default ProviderListPage;
