import React from "react";
import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.compoment";
import CustomeButton from "../custome-button/custome-button.component";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();

    this.setState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });
  };
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
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
            value={this.state.name}
            required
          />
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
                    <FormInput
            name="passwordConfirm"
            handleChange={this.handleChange}
            type="password"
            value={this.state.password}
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
