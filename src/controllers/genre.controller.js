const prisma = require('../config/config.db.js')

const createGenre = async (req, res) => {
    const {name} = req.body
    try {
        const newGenre = await prisma.genre.create({
            data:{
                name
            }
        })
        res.status(201).json({"massage":newGenre})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}

const getGenre = async (req, res) => {
    try {
        const genres = await prisma.genre.findMany({
            select:{
                name:true
            }
        })
        res.json({"Genres":genres})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}

const getGenreById = async (req, res) => {
    const {id} = req.params
    try {
        const genre = await prisma.genre.findUnique({
            where:{id:Number(id)},
            select:{
                name:true
            }
        })
        res.json({"Genre":genre})
    } catch (error) {
        res.status(500).json({'massage':`internal server err ${error}`})
    }
}

module.exports = { 
    createGenre,
    getGenre,
    getGenreById
};