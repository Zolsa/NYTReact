import React from "react";

class Search extends React.Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.findArticles(this.state.topic, this.state.startYear, this.state.endYear).then((res) => {
      this.setState({articles: res.data.response.docs});
    });
  }

  render() {
    return (
      <div className="panel panel-primary">

        <div className="panel-heading">
          <h3 className="panel-title">Search</h3>
        </div>

        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Topic</label>
                <input onChange={this.handleInputChange} value={this.state.title} type="text" name="topic" className="form-control" id="topic" />
              <label>Start Year</label>
                <input onChange={this.handleInputChange} value={this.state.startYear} type="text" name="startYear" className="form-control" id="start-year" />
              <label>End Year</label>
                <input onChange={this.handleInputChange} value={this.state.endYear} type="text" name="endYear" className="form-control" id="end-year" />
              <br>
              <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
