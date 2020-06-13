// // interagi avec la bdd
// const mongoose = require('mongoose')

// const RS = mongoose.Schema({ // schema permet de generer des shema
//     name: {type: String, required: true},
//     weight: {type: Number, required: true}
// })

// module.exports = mongoose.model('Recette'. RS)

const mongoose = require('mongoose')

const RecetteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Recette', RecetteSchema);