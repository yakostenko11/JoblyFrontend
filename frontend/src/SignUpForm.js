import React, { Component } from "react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSignUp(this.state);

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

          <div className="form-group mb-4">
            <label htmlFor="first_name">First Name</label>
            <input 
              type="first_name" 
              name="first_name"
              className="form-control" 
              id="first_name" 
              placeholder="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="last_name">Last Name</label>
            <input 
              type="last_name" 
              name="last_name"
              className="form-control" 
              id="last_name" 
              placeholder="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email"
              className="form-control" 
              id="email" 
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
        
export default SignUpForm;