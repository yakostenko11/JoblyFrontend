import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {

    paramsOrData._token = localStorage.getItem('token');
    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  //accepts a search term for company names
  static async getFilteredCompanies(query) {
    let res = await this.request(`companies?search=${query}`);
    return res.companies;
  }

  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  //accepts a search term for job titles
  static async getFilteredJobs(query) {
    let res = await this.request(`jobs?search=${query}`);
    return res.jobs;
  }

  static async login(credentials) {
    let res = await this.request(`login`, credentials, "post");
    return res.token;
  }
  
  static async register(data) {
    let res = await this.request(`users`, data, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async applyForJob(id, username) {
    let res = await this.request(`jobs/${id}/apply`, {username:username}, "post");
    return res.message;
  }

}

export default JoblyApi;