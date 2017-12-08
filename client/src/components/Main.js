import React, {Component} from "react";
import Query from "./children/Query";
import Results from "./children/Results";
import Saved from "./children/Saved";
import API from "../utils/api";

class Main extends React.Component {

  state = {
    results: [],
    saved: []
  };

  render(){
    return(
      <div className="hold">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">New York Times Article Scrubber</h1>
            <p className="lead">Search for and annotate articles of interest!</p>
            <hr className="my-4"/>
            <h1 className="text-center">Created using React.js</h1>
          </div>
        </div>
      </div>
      <div>
        {Query}
        {Results}
        {Saved}
      </div>
    )
  } 
}


