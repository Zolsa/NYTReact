import React, {Component} from "react";
import Query from "./children/Query";
import Results from "./children/Results";
import Saved from "./children/Saved";


import API from "../utils/api";

class Main extends Component {

	state = {
		topic: "",
		startYear: "",
		endYear: "",
		articles: [],
		saved: []
	};

	componentDidMount(){
		this.getSavedArticles()
  };

  getSavedArticles = () => {
  	API.findSaved().then((res) => {
      this.setState({ saved: res.data });
      Saved.displaySaved();
    });
	};

	render(){
		return(
      <div className="container">
				<Query>
        <Results>
        <Saved>
			</div>
		)
	};	
};

export default Main;