import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.searchItem);
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input 
            className="form-control form-control-lg flex-grow-1" 
            type="search" 
            placeholder="Search" 
            name="searchItem" 
            id="search" 
            onChange={this.handleChange} 
            value={this.state.searchItem} 
          />
          <button 
            className="btn btn-primary btn-lg" 
            type="submit">Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;