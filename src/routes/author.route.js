const express = require('express')
const router = express.Router()
const {createAuthor, getAuthor, getAuthorById} = require('../controllers/author.controller.js')

router.post('/', createAuthor)
router.get('/', getAuthor)
router.get('/:id', getAuthorById)


module.exports = router;
