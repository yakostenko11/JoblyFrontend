import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";


class CompanyCard extends Component {
  render() {
    let { company } = this.props;
    let companyPage = `/companies/${company.handle}`;
    let image = company.logo_url ? company.logo_url : "https://cdn0.iconfinder.com/data/icons/good-view/500/View-08-512.png"   
    return (
      <div>
        <div className="companyCard my-3">
          <Link to={companyPage}>
            <div className="card-body">
              <h5 className="card-title">{company.name}</h5>
              <p className="card-text">{company.description}</p>
              <img className="imgStyle"src={image} />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default CompanyCard;