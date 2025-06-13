import { createContext, useEffect, useState,type ReactNode } from "react";
import type { Provider } from "../types/Provider";
import { fetchProviders } from "../api/fetchProviders";

type ProviderContextType = {
  providers: Provider[];
  loading: boolean;
};

export const ProviderContext = createContext<ProviderContextType>({
  providers: [],
  loading: true,
});

export const ProviderProvider = ({ children }: { children: ReactNode }) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProviders().then((data) => {
      setProviders(data);
      setLoading(false);
    });
  }, []);

  return (
    <ProviderContext.Provider value={{ providers, loading }}>
      {children}
    </ProviderContext.Provider>
  );
};
