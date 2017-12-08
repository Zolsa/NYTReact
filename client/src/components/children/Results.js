import React from "react";

class Results extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     article: {
  //       title: "",
  //       date: "",
  //       url: ""
  //     }
  //   };

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  };

  handleSaveButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    console.log("findArticleByID: ", findArticleByID);
    const title = findArticleByID.headline.main;
    const date = findArticleByID.pub_date;
    const url = findArticleByID.web_url;
    API.saveArticle(title, date, url).then(this.getSavedArticles());
  }

  // handleSubmit(index, headline, pubdate, url) {
  //   event.preventDefault();
  //   console.log("This is headline of new article to save: " + headline);
  //   console.log("This is the published date of new article to save: " + pubdate);
  //   const newState = this.state.article;
  //   newState.title = headline;
  //   newState.date = pubdate;
  //   newState.url = url
  //   this.setState({
  //     article: newState
  //   });
  //   console.log("New value of article date? " + this.state.article.date);
  //   this.props.setArticleToSave(index, this.state.article);
  // }

  displayResults = () => {
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

export default Results;