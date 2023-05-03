import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

class CompanyList extends Component {
  render() {
    let { companies } = this.props;
    let output = companies.map(company => (
      <CompanyCard 
        key={company.handle} 
        company={company} 
      />
    ));

    return (
      <div>
        {output}
      </div>
    );
  }
}

export default CompanyList;