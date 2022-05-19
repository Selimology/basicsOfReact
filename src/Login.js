import React, { useState } from "react";
import { logincheck } from "./utils";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    setError("");
    try {
      await logincheck({ username, password });
      setisLoggedIn(true);
      setUsername("");
      setPassword("");
      setError("");
    } catch (error) {
      //do nothing
      setError("incorrect username or password");
    }
    setisLoading(false);
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Hello {username}</h1>
            <button onClick={() => setisLoggedIn(false)}>Log out</button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Login</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button className="submit" type="submit" disabled={isLoading}>
              Login in
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
