const prisma = require('../config/config.db.js')

const createBook = async (req, res) => {
    const {title, summary, isbn, authorId} = req.body
    try {
       const newBook = await prisma.book.create({
            data:{
                title,
                summary,
                isbn,
                authorId
            }
        })
        res.status(201).json({"massage":newBook})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}

const getBooks = async (req, res) => {
    try {
        const allBooks = await prisma.book.findMany({
            select:{
                title:true,
                summary:true,
                isbn:true,
                authorId:true
            }
        })
        res.json({"Books":allBooks})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}

const getBookById = async (req, res) => {
    const {id} = req.params
    try {
        const book = await prisma.book.findUnique({
            where:{id:Number(id)},
            select:{
                title:true,
                summary:true,
                isbn:true,
                authorId:true
            }
        })
        res.json({"book":book})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}

module.exports = {
    createBook,
    getBooks,
    getBookById
}