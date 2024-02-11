import React, { useState } from "react";
import "../css/quality1.css";

function FormBuilderHeader() {
  return (
    <>
      <header className="header">
        <h1 className="title">Sign up for Form Builder</h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/47ce4d59489c65ca7b87207a1a33b72dfe4924a96092f2d909fbea0206a313ed?apiKey=0d44358c349241a884bac570e8081cff&"
          className="logo"
          alt="Form Builder Logo"
        />
      </header>
    </>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input"
          aria-label="Name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input"
          aria-label="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input"
          aria-label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword" className="label">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="input"
          aria-label="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <button type="submit" className="button">
        Sign Up
      </button>
    </form>
  );
}

function MyQuality1Component() {
  return (
    <>
      <FormBuilderHeader />
      <main className="main-container">
        <Form />
      </main>
    </>
  );
}

export default MyQuality1Component;
