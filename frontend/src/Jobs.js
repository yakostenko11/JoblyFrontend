import React, { Component } from "react";
import "./Jobs.css";
import JoblyApi from "./JoblyApi";
import JobList from "./JobList";
import SearchForm from "./SearchForm";
import CurrentUserContext from "./CurrentUserContext";

class Jobs extends Component {
  static contextType = CurrentUserContext;

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.getFilteredJobs = this.getFilteredJobs.bind(this);
    this.apply = this.apply.bind(this);
  }

  //when initially accessing page, grabs all jobs from server and sets state
  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs });
  }

  //grab filtered list of jobs based on search item
  async getFilteredJobs(query) {
    let jobs = await JoblyApi.getFilteredJobs(query);
    this.setState({ jobs });
  }

  /**
   * Post to server when user applies to a job. Associates username to job id.
   * @param {number} appliedJobId 
   */
  async apply(appliedJobId) {
    let { username } = this.context;
    
    // posts to server the user's application and returns message: "applied"
    let message = await JoblyApi.applyForJob(appliedJobId, username);

    //update the single job in state to have an applied status indicator
    this.setState(st => ({
      jobs: st.jobs.map(job =>
        job.id === appliedJobId
          ? { ...job, state: message }
          : job
      )
    }));
  }

  render() {
    let { jobs } = this.state;
    return (
      <div>
        <div className="jobsWrap">
          <h1 style={{ color: "#6d6a6d", marginTop: "35px"}}>Jobs</h1>
          <SearchForm handleSearch={this.getFilteredJobs} />
          <JobList jobs={jobs} apply={this.apply} />
        </div>
      </div>
    );
  }
}

export default Jobs;