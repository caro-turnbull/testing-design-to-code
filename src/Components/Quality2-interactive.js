import React from "react";
import "../css/quality2.css";

function LoginForm() {
  const handleGoogleLogin = () => {
    // handle Google login logic here
  };

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <form className="login-form">
      <header className="header">
        <h2 className="title">Login</h2>
      </header>
      <div className="main-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/00c7fa8e197cdf8156c10103993b7acd6bf46eeca5e5cc686b67c7cdeddd5048?apiKey=0d44358c349241a884bac570e8081cff&"
          className="img"
          alt="Logo"
        />
        <div className="button-wrapper">
          <button className="button primary-btn" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
        </div>
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
          aria-role="textbox"
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
          aria-role="textbox"
        />
      </div>
      <button className="button primary-btn submit-btn" onClick={handleLogin}>
        Log In
      </button>
      <p className="description">
        Don't have an account?{" "}
        <a href="/signup" className="link">
          Sign up
        </a>
      </p>
    </form>
  );
}

export default LoginForm;
