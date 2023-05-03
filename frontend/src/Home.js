import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CurrentUserContext from "./CurrentUserContext";
import image from "./assets/studying.png";

class Home extends Component {
  static contextType = CurrentUserContext;

  render() {
    let home = (
      <div className="home col-sm-6">
        <h1>Need a job? We got you.</h1>
        <p>Search thousands of job postings from top rated employers.</p>
        <Link to="/login">
          <button className="btn btn-primary btn-lg btn-style">
            Login
          </button>
        </Link>

      </div>
    );

    if (this.context) {
      home = (
        <div>
          <h4>Welcome Back {this.context.first_name}!</h4>
          <p>Let's find you a job</p>
          <img src={image}/><br/>
          <Link to="/jobs">
            <button className="btn btn-lg btn-success mx-2 btn-home">
              Job Postings
            </button>
          </Link>
          <Link to="/companies">
            <button className="btn btn-lg btn-success mx-2 btn-home">
              Companies
            </button>
          </Link>
        </div>
      );
    }

    return (
      <div className="home-style">
        {home}
      </div>
    );
  }
}

export default Home;