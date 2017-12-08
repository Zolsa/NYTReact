const axios = require("axios");
const APIKey = "38bf80b0026e48739d16cc7b8f872afd";
const APIURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const API = {
	findArticles: function(topic, startYear, endYear){
		const APISearch = APIURL + APIKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
		return axios.get(APISearch);
	},
	findSaved: function(){
		return axios.get("/api/saved")
	},
	saveArticle: function(title, date, url){
		return axios.post("/api/saved", {title: title, date: date, url: url});
	},
	deleteArticle: function(){
		return axios.delete("api/saved/$id");
	}
};

export default API;