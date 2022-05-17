import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/shop/hats" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
