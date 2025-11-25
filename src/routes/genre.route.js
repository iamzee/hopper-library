const express = require('express')
const router = express.Router()
const {createGenre, getGenre, getGenreById} = require('../controllers/genre.controller.js')

router.post('/', createGenre)
router.get('/', getGenre)
router.get('/:id',getGenreById)


module.exports = router;
