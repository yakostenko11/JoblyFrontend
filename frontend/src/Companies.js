import React, { Component } from "react";
import "./Companies.css";
import JoblyApi from "./JoblyApi";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
    this.getFilteredCompanies = this.getFilteredCompanies.bind(this);
  }
  
  //when initially accessing page, grabs all companies from server and sets state
  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    this.setState({ companies });
  }

  //grab filtered list of companies based on search item
  async getFilteredCompanies(query) {
    let companies = await JoblyApi.getFilteredCompanies(query);
    this.setState({ companies });
  }

  render() {
    let { companies } = this.state;
    return (
      <div>
        <div className="companiesWrap">
          <h1 style={{ color: "#6d6a6d", marginTop: "35px"}}>Companies</h1>
          <SearchForm handleSearch={this.getFilteredCompanies} />
          <CompanyList companies={companies} />
        </div>
      </div>
    );
  }
}

export default Companies;