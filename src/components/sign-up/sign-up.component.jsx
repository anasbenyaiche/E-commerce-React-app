import React from "react";
import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.compoment";
import CustomeButton from "../custome-button/custome-button.component";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, displayName);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };
  handleChange = event => {
    event.preventDefault();
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            handleChange={this.handleChange}
            type="text"
            label="name"
            value={displayName}
            required
          />
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            label="email"
            value={email}
            required
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            value={password}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            handleChange={this.handleChange}
            type="password"
            value={confirmPassword}
            label="confirm password"
            required
          />

          <CustomeButton>Sign up</CustomeButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
