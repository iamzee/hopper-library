require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();

const authorRoute = require('./routes/author.route.js')
const bookRoute = require('./routes/book.route.js')
const genreRoute = require('./routes/genre.route.js')

app.use(express.json());
app.use(cookieParser())

app.get("/health", (req, res) => {
  res.send("OK")
})

app.use('/api/authors', authorRoute)
app.use('/api/books', bookRoute)
app.use('/api/genres', genreRoute)



app.listen(3003, () => {
  console.log("Server started on port 3003")
})