import "../AuthComponent.css"
import { Component } from "react";
import { signUp } from "../../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmation: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      //The promise returned by the sign up server method, will resolve to the user object included in the payload of the JSON WEB TOKEN (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };
  //We must override the render method
  //The render method is the equivalent to a function-based component

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
       <>
          <h1 className="form-title">SIGN UP</h1>
          <p className="error-message">&nbsp;{this.state.error}</p>
            <form autoComplete="off" onSubmit={this.handleSubmit} id="auth-form">
              <input className="auth-inputs" type="text" name="name" value={this.state.name} onChange={this.handleChange} required placeholder="Name"/>
              &nbsp;
              <input className="auth-inputs" type="email" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="Email"/>
              <p>Password <span><strong>MUST</strong></span> be 8 characters or longer</p>
              <input className="auth-inputs" type="password" name="password" value={this.state.password} onChange={this.handleChange} required placeholder="Password"/>
              &nbsp;
              <input className="auth-inputs" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required placeholder="Confirm Password"/>
              <br />
              <div className="auth-button-container">
                <button className="auth-button" type="submit" disabled={disable}>SIGN UP</button>
              </div>
            </form>
         </>
    );
  }
}
