import React, { Component } from "react";
import JobCard from "./JobCard";

class JobList extends Component {

  render() {
    let { jobs } = this.props;
    let output = jobs.map(job => (
      <JobCard 
        key={job.id} 
        job={job} 
        apply={this.props.apply} />
    ));

    return (
      <div>
        {output}
      </div>
    );
  }
}
export default JobList;