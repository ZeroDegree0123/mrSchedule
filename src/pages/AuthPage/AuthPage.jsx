import "./AuthPage.css"
import { useState } from "react";
import SignUpForm from "../../Components/AuthComponent/SignUpForm/SignUpForm";
import LoginForm from "../../Components/AuthComponent/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="auth-page">
      <h2 className="getting-started">Getting Started</h2>
      <div className="auth-content-container">
        <br />
        { showLogin ?
          <LoginForm setUser={setUser}/>
          :
          <SignUpForm setUser={setUser}/>
        }
        <div className="auth-toggle-container">
          <p>Don't have an account or already have one</p>
          <button className="auth-toggle-button" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
        </div>
      </div>
    </main>
  );
}
