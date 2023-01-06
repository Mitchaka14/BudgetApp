import React, { useState } from "react";
import { register } from "../api";

const RegisterForm = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    register(username, password)
      .then((response) => {
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setError("An error occurred. Please try again later.");
        }
      })
      .catch((error) => {
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
