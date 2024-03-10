import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    // Hardcoded credentials
    if (username === "asd" && password === "asd") {
      navigate("/transition"); // Navigate to TransitionPage
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-form">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-style">
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="form-field"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="form-field"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {error && <p className="error-message">Invalid credentials!</p>}
      </div>
    </div>
  );
};

export default Login;