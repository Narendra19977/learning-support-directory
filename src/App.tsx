import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProviderProvider } from "./context/providerContext";
import ProviderListPage from "./pages/ProviderList";
import ProviderDetailPage from "./pages/ProviderDetail";

const App = () => {
  return (
    <ProviderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProviderListPage />} />
          <Route path="/providers/:id" element={<ProviderDetailPage />} />
        </Routes>
      </Router>
    </ProviderProvider>
  );
};

export default App;
