/**
 * Created by ryanrodwell on 6/9/17.
 */
// Include the Mongoose Dependencies
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// Create the Model
let Article = mongoose.model('Article', ArticleSchema);

// Export it for use elsewhere
module.exports = Article;