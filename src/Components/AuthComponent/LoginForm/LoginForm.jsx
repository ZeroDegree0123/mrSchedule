// LoginForm.jsx
import "./LoginForm.css"
import { useState } from "react";
import * as usersService from "../../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <h2 className="form-title">LOGIN</h2>
      <p className="error-message">&nbsp;{error}</p>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit} id="auth-form">
          &nbsp;
          <input className="auth-inputs" type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder="Email"/>
          &nbsp;
          <input className="auth-inputs" type="password" name="password" value={credentials.password} onChange={handleChange} required placeholder="Passwords"/>
          <br />
          <div className="auth-button-container">
            <button className="auth-button" type="submit">LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
}
