import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils.js";

const SingIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignIn({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setSignIn((prevSignIn) => {
      return {
        ...prevSignIn,
        [e.target.name]: e.target.value,
      };
    });
    console.log(signIn);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={signIn.email}
          label="email"
          required
        />
        {/* <label>Email</label> */}
        <FormInput
          type="password"
          name="password"
          value={signIn.password}
          label="password"
          handleChange={handleChange}
          required
        />
        {/* <label>Password</label> */}
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
