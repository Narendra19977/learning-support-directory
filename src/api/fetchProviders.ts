import data from "../data/providers.json";
import type { Provider } from "../types/Provider";



export function fetchProviders(): Promise<Provider[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // Simulates a 1 second network delay
  });
}
