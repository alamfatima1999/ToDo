const todoModel = require("../models/todoModel");


exports.getCompletedTasks = (req, res) => {
    todoModel.find({completed: true})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(`Sorry!! couldn't fetch all completed tasks`);
    })
};