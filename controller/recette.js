// const Recette = require('../model/Recette')

// exports.createRecette = (req, res) => {
//     const recetteBody = req.body;

//     const recette = new Recette({ //instancie un objet
//         ...recetteBody // push tout
//     })
//     recette.save().then(() => {
//         res.status(201).json({
//             message: "la recette est enregistrée"
//         })
//     }).catch(error => {
//         res.status(400).json({
//             message: "Une erreur est survenu" + error
//         })
//     })
// }

const Recette = require('../model/Recette');
const { request } = require('../app');

exports.createRecette = (requeste, response) => {
    const recetteBody = requeste.body;

    const recette = new Recette({
        ...recetteBody
    });
    recette.save().then(() => {
        response.status(201).json({
            message: "La recette as été enregistrer"
        }).catch(error => {
            response.status(400).json({
                message: "Une erreur est survenus" + error
            });
        });
    });
}

exports.getRecettes = (req, res) => {
    Recette.find().then(recettes => {
        res.status(200).json(recettes)
    }).catch(error => {
        res.status(400).json(error)
    })
}

exports.getRecetteById = (req, res) => {
    Recette.findById(req.params.id).then(recette => {
        res.status(200).json(recette)
    }).catch(error => {
        res.status(400).json(error)
    })
}

exports.updateRecetteById = (req, res) => {
    Recette.findByIdAndUpdate(req.params.id, {
        ...req.body
    }).then(() => {
        res.status(201).json({
            message: "la recette a été mise a jour"
        })
    }).catch(err => {
        res.status(400).json(err)
    })
}

exports.deleteRecetteById = (req, res) => {
    Recette.findByIdAndDelete(req.params.id).then(() => {
        res.status(401).json({
            message: "REcette supprimé"
        })
    }).catch(err => {
        res.status(400).json(err)
    })
}