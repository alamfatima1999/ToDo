const todoModel = require("../models/todoModel");


exports.getActiveTasks = (req, res) => {
    todoModel.find({completed: false})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(`Sorry!! Couldn't fetch all records`);
    });
}