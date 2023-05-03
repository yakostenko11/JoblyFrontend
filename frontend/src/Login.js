import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeView: "login"
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.toggleLoginView = this.toggleLoginView.bind(this);
    this.toggleSignupView = this.toggleSignupView.bind(this);
  }

  toggleView(view) {
    this.setState({ activeView: view });
  }

  toggleSignupView() {
    this.toggleView("signup");
  }

  toggleLoginView() {
    this.toggleView("login");
  }

  async handleLogin(data) {
    let token;
    try {
      token = await JoblyApi.login(data);
      localStorage.setItem('token', token);
      await this.props.getCurrentUser();
      this.props.history.push("/");
    }
    catch (e) {
      //TODO - alert component
      alert(e);
    }
  }

  async handleSignUp(data) {
    let token;
    try {
      token = await JoblyApi.register(data);
      localStorage.setItem('token', token);
      await this.props.getCurrentUser();
      this.props.history.push("/");
    }
    catch (e) {
      //TODO - alert component
      alert(e);
    }
  }

  render() {
    let form = this.state.activeView === "login" 
      ? <LoginForm handleLogin={this.handleLogin} /> 
      : <SignUpForm handleSignUp={this.handleSignUp} />;

    return (

      <div className="form-container">
        <div className="btn-group">
          <button className={`btn btn-primary`} onClick={this.toggleLoginView}>
            Login
          </button>
          <button className={`btn btn-primary`} onClick={this.toggleSignupView}>
            Sign up
          </button>
        </div>
        {form}
      </div>

  
    );
  }
}

export default Login;