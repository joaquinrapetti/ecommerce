import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/shop/hats" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
