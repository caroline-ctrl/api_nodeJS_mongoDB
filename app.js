const express = require('express')
const bodyParser = require('body-parser') //permet de recup le contenu des body et pouvoir les exploiter
const mongoose = require('mongoose')
const recetteRoutes = require('./routes/recette')

const app = express();

mongoose.connect('mongodb+srv://carod:caroD34270*@cluster0-fbriu.gcp.mongodb.net/carod?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connexion mongodb réussie')
}).catch(err => {
    console.log(err)
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use('/api/recettes', recetteRoutes) // toutes les routes vont etre précédées de /api/recettes

module.exports = app; // exporter l'app dans le server