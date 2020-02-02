const model = require('../models')


function createUser(req, res){
    model.User.create({
        user: req.body.user,
        age: req.body.age,
        active: req.body.active
    })
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({error: error})
    })
}



function updateUser(req, res){
    model.User.update({
        user: req.body.user,
        age: req.body.age,
        active: req.body.active
    },{
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({error: error})
    })
}

function deleteUser(req, res){
    model.User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({error: error})
    })
}

function readUser(req, res){
    if(req.query){
        model.User.findAll({
            where: req.query
        })
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({error: error})
        })
    }else{
        model.User.findAll()
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({error: error})
        })
    }
}
// CARI USER BERDASARKAN ID
function findUserById(req, res){
    model.User.findAll({
        where: req.query
    })
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({error: error})
    })
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}