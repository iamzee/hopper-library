const prisma = require('../config/config.db.js')

createBook = async (req, res) => {
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


module.exports = {
    createBook
}