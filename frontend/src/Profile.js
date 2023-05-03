import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import "./Profile.css";
import CurrentUserContext from "./CurrentUserContext";

class Profile extends Component {
  static contextType = CurrentUserContext;

  constructor(props, context) {
    super(props);
    let curr = context;
    this.state = {
      username: curr.username,
      first_name: curr.first_name || "",
      last_name: curr.last_name || "",
      email: curr.email || "",
      photo_url: curr.photo_url || "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      let data = {
        first_name: this.state.first_name || undefined,
        last_name: this.state.last_name || undefined,
        email: this.state.email || undefined,
        photo_url: this.state.photo_url || undefined,
        password: this.state.password
      };

      await JoblyApi.updateUser(this.state.username, data);
      this.setState({ password: "" }, () => alert("User details have been updated")
      );

    }
    catch (err) {
      alert("Error occured");
      console.log(err);
    }
  }

  render() {
    return (
      <div className="card-body profile-style">
        <h2>Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="username">Username</label>
            <p className="form-control-plaintext">{this.state.username}</p>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              placeholder="first name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange} />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              placeholder="last name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange} />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter email" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Profile;
