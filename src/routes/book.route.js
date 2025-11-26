const express = require('express')
const router = express.Router()
const {createBook} = require('../controllers/book.controller.js')

router.post('/', createBook)


module.exports = router;
