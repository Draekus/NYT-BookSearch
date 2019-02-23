const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models/index.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect app to mongo db
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define API routes here
// Route the grabs all books from the database
app.get("/api/books", (req, res) => {
  db.Book.find({})
    .then(dbBook => {
      res.json(200, dbBook);
    })
    .catch(err => {
      res.json(500, err);
    });
});

// Route that adds new book to the database
app.post("/api/books", (req, res) => {
  console.log(req.body);
  db.Book.create(req.body)
    .then(dbBook => {
      res.json(201, dbBook);
    })
    .catch(err => {
      res.json(500, err);
    });
});

// Route for deleting a book from the database
app.delete("/api/books/:id", (req, res) => {
  const id = req.params.id;
  db.Book.deleteOne({ _id: id })
    .then(dbBook => {
      res.json(200, dbBook);
    })
    .catch(err => {
      res.json(500, err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
