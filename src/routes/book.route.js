const express = require('express')
const router = express.Router()
const {createBook, getBooks, getBookById} = require('../controllers/book.controller.js')

router.post('/', createBook)
router.get('/', getBooks)
router.get('/:id', getBookById)


module.exports = router;
