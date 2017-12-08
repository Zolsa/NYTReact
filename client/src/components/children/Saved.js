import React from "react";
import API from "../../utils/API"

class Saved extends React.Component {
	//Same thing... Not sure how to update state.saved with the saved articles in the db
	state = {
		saved: API.findSaved;
	}

	handleDeleteButton = (id) => {
    API.deleteArticle(id).then(Main.getSavedArticles());
  }

  componentDidMount() {
    API.findSaved()
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  }
 	
 	displayArticles = (this.state.saved) => {
	render() {
		return (
			<div className="col-md-12">
    		<div className="row">
    			<div className="col-sm-12">
    				<div className="panel panel-primary">

    					<div className="panel-heading">
    						<h3 className="panel-title">Saved Articles</h3>
  						</div>

	  					<div className="panel-body">
				      	{this.state.saved.map((article, i) => {
				        	return (
				        		<div key={i} onClick={() => this.props.deleteArticle(article._id, i)} className="row savedRow">
				        			
				        			<div className="col-sm-5 articleText">
				        				<a href={article.url}>{article.title}</a>
				        			</div>

				        			<div className="col-sm-5 dateText">
				        				Date: {article.date}
				        			</div>

				        			<div className="col-sm-2 pull-right">
				        				<button className="btn btn-default" onClick={() => this.handleDeleteButton(props._id)}>Delete Article</button>
				        			</div>

				        		</div>
				        	);
				      	})}
			    		</div>
    				</div>
    			</div>
    		</div>
    	</div>
		);
	}
}

export default Saved;