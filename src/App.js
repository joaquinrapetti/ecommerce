import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser({ currentUser: user });

      console.log(user);
    });
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/shop/hats" element={<ShopPage />} />
        <Route path="/signin" element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
