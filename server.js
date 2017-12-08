const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const router = new express.Router();
const routes = require("./routes");
const app = express();
const Article = require("./models/Article");


app.use(routes);

const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = process.env.MONGODB_URI || "mongodb://localhost/newyorktimes";
mongoose.connect(db, function(error){
	if(error){
		console.log(error);
	}
	else {
		console.log("Connected to database.");
	}
});

router.get("/api/saved", function(req, res) {
    Article.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
});

router.post("/api/saved", function(req, res) {
    Article.create(req.body).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
});

router.delete("/api/saved/:id", function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
});

router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log("Server running on port " + PORT);
});