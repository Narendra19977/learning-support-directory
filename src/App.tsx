import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProviderProvider } from "./contexts/providerContext";
import React from "react";
const ProviderListPage=React.lazy(()=>import("./pages/ProviderListPage/ProviderList"))
const ProviderDetailPage = React.lazy(()=>import("./pages/ProviderDetailPage/ProviderDetail"))


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