import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.compoment";
import CustomeButton from "../custome-button/custome-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
    // Function to change the value of on the event
    handleChange = event => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
    };
   // setting the state to the initiale values
    handleSubmit = event => {
      event.preventDefault();
      this.setState({ email: "", password: "" });
    };


  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            label="email"
            value={this.state.email}
            required
          />
    
          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            value={this.state.password}
            label="password"
            required
          />
          <div className="buttons">
          <CustomeButton type="submit" >Sign in</CustomeButton>
          <CustomeButton onClick={signInWithGoogle} isGoogleSignin>Sign in with google</CustomeButton>
       
          </div>
         </form>
        
      </div>
    );
  }
}
export default SignIn;
