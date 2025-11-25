const prisma = require('../config/config.db.js')

const createAuthor = async (req, res) => {
    const {name, date_of_birth, date_of_death, lifespan} = req.body
    try {
       const newAuthor = await prisma.author.create({
            data:{
                name,
                date_of_birth: new Date(date_of_birth),
                date_of_death: date_of_death ? new Date(date_of_death) : null,
                lifespan: lifespan ? Number(lifespan) : null,
            }
        })
        res.status(201).json({"massage":newAuthor})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}

const getAuthor = async (req, res) => {
    try {
        const allAuthor = await prisma.author.findMany({
            select: {
                name: true,
                date_of_birth: true,
                date_of_death: true,
                lifespan:true
            }
        })
        res.json({"Authors":allAuthor})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}

const getAuthorById = async (req, res) => {
    const {id} = req.params
    try {
        const authorById = await prisma.author.findUnique({
            where:{id: Number(id)},
            select: {
                name: true,
                date_of_birth: true,
                date_of_death: true,
                lifespan:true
            }
        })
        res.json({"Author":authorById})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}


module.exports = {
    createAuthor,
    getAuthor,
    getAuthorById
}