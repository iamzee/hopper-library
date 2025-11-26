const prisma = require('../config/config.db.js')

createAuthor = async (req, res) => {
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


module.exports = {
    createAuthor
}