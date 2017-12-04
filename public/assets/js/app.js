//Setup Variables
let authKey = "38bf80b0026e48739d16cc7b8f872afd";

let searchInput = "";
let numArticles = 0;
let startYear = 0;
let endYear = 0;

let queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

$("#search-btn").click (function(){
    searchInput = $("#search").val();
    startYear = $("#start-year").val();
    endYear = $("#end-year").val();
    numArticles = $("#num-records").val();
    console.log(searchInput);
    console.log(startYear);
    console.log(endYear);

    var queryURL = queryURLBase + "&q=" + searchInput + "&begin_date=" + startYear + "&end_date=" + endYear;

    console.log(queryURL);

    //API call to NYTimes
    $.ajax({
    	url: queryURL,
    	method: "GET"
    }).done(function(response){
        console.log(queryURL);
    	console.log(response);
    	//convert the number input from DOM from string to number variable to iterate over it.
    	for (var i =0; i< Number(numArticles); i++)
    	{ 
    	  //stores current record into a reference variable
    	  var searchResults = response.docs[i];
    	  //selects results of the current record to display to DOM
    	  var msg1= $("<p> Title: "+searchResults.headline.main+"</p>");
    	  var output = $(msg1+ "<br>Summary: "+searchResults.snippet+"<br><span>Source: "+searchResults.source+", "+searchResults.pub_date+".<br>website: "+searchResults.web_url);
    	  //appends article search to the search result div
    	  $("#results").append(output);
    	  console.log(output);
    	}

    }).fail(function(err){
            throw err;
    });
    //Don't reload page
    return false;

});
