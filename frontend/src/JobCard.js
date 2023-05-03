import React, { Component } from "react";
import "./JobCard.css";

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.applyJob = this.applyJob.bind(this);
  }

  applyJob() {
    this.props.apply(this.props.job.id);
  }

  render() {
    let { job } = this.props;
    let { state } = job;
    let buttonText = state ? "Applied" : "Apply";

    return (
      <div>
        <div className="jobCard my-3">
          <div className="card-body">
            <h3 className="card-title">{job.title}</h3>
            <p className="card-text">Salary: ${job.salary}</p>
            <p className="card-text">Equity: {job.equity}</p>
            <button onClick={this.applyJob} className="btn btn-success" disabled={state}>{buttonText}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCard;