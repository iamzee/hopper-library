require("dotenv").config();
const express = require("express");


const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

const authorRoute = require('./routes/author.route.js')
const bookRoute = require('./routes/book.route.js')

app.use(express.json());
app.use(cookieParser())

app.get("/health", (req, res) => {
  res.send("OK")
})

app.use('/api/author', authorRoute)
app.use('/api/book', bookRoute)



app.get("/api/v1/genres", async (req, res) => {
  const genres = await prisma.genre.findMany();
  return res.status(200).json(genres);
})

app.get("/api/v1/genres/:id", async (req, res) => {
  const id = Number(req.params.id);
  const genre = await prisma.genre.findUnique({
    where: {
      id
    }
  })

  if (!genre) {
    return res.status(404).json({ error: "Genre with the given id does not exist" })
  }
  res.status(200).json(genre)
})

app.patch("/api/v1/genres/:id", async (req, res) => {
  const id = Number(req.params.id);
  await prisma.genre.update({
    where: {
      id: id
    },
    data: req.body
  })

  return res.status(200).send("OK")
})

app.delete("/api/v1/genres/:id", async (req, res) => {
  const id = Number(req.params.id);
  await prisma.genre.delete({
    where: {
      id: id
    }
  })

  return res.status(204).send();
})


app.listen(3003, () => {
  console.log("Server started on port 3003")
})
