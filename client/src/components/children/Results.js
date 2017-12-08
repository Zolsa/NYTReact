import React from "react";
import Query from "./Query";

class Results extends React.Component {
//Not sure how to pass the state of articles in from Query results
  state = {
    articles: Query.state.articles,
  };

  handleSaveButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    console.log("findArticleByID: ", findArticleByID);
    const title = findArticleByID.headline.main;
    const date = findArticleByID.pub_date;
    const url = findArticleByID.web_url;
    API.saveArticle(title, date, url).then(this.getSavedArticles());
  }

  componentDidMount(articles) {
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  }

  getSavedArticles(){
    render () {
      return (
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Results</h3>
          </div>
          <div className="panel-body">
            {this.state.articles.map(function(obj, index){
              return (
                <div key={index} className="row resultsRow">

                  <div className="col-sm-6 articleText">
                    <a href={obj.web_url}>{obj.headline.main}</a>
                  </div>

                  <div className="col-sm-6">
                    <button className="btn btn-default" onClick={() => props.handleSaveButton(this._id)}>Save</button>
                  </div>
                  
                </div>
              );
            }, this)}
          </div>
        </div>
      );
    }
  }
}

export default Results;