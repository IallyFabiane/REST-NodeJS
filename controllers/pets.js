const Pet = require('../models/pets')

module.exports = app => {
    app.post('/pet', (req, res) => {
        const pet = res.body

        Pet.adiciona(pet, res)
    })
}