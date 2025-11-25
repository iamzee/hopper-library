const express = require('express')
const router = express.Router()
const {createAuthor} = require('../controllers/author.controller.js')

router.post('/', createAuthor)


module.exports = router;
