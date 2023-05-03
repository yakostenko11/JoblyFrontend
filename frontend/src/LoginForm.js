import React, { Component } from "react";
import "./Login.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
  }

  render() {
    return (
      <div className="card-body login-style">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="username">Username</label>
            <input 
              type="text"
              name="username" 
              className="form-control" 
              id="username" 
              placeholder="Enter username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password"
              className="form-control" 
              id="password" 
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
        
export default LoginForm;