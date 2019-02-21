// Require mongoose
const mongoose = require("mongoose");

// Reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Schema Object
const ArticleSchema = new Schema({
  title: {
    type: String,
  },
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
  saved: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// This creates the Article model with the above schema
const Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
