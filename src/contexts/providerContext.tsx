import { createContext, useEffect, useState,type ReactNode } from "react";
import type { Provider } from "../types/provider.type";
import { fetchProviders } from "../api/fetchProvider";

type ProviderContextType = {
  providers: Provider[];
  loading: boolean;
  err:any
};

export const ProviderContext = createContext<ProviderContextType>({
  providers: [],
  loading: true,
  err:undefined
});

export const ProviderProvider = ({ children }: { children: ReactNode }) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [err,setErr]=useState<any>(undefined)

useEffect(() => {
  setLoading(true); // ✅ Immediately show loading before starting the fetch
  fetchProviders()
    .then((data) => {
      setProviders(data);
    })
    .catch((err) => {
      setErr(err);
    })
    .finally(() => {
      setLoading(false); // ✅ Always hide loading, even if error
    });
}, []);

  return (
    <ProviderContext.Provider value={{ providers, loading,err }}>
      {children}
    </ProviderContext.Provider>
  );
};