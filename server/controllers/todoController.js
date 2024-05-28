const todoModel = require("../models/todoModel");

exports.getAllTodos = (req, res) => {
  todoModel
    .find()
    .then((todoList) => {
      res.json(todoList);
    })
    .catch((err) => {
      console.log(`Error fetching todos`, err);
    });
};

exports.addTodo = (req, res) => {
  const info = req.body.info;
  const Todo = new todoModel({info: info});
  Todo.save().then((result) => {if(!result){
        res.send(`Database not updated`);
    }
    res.send(`Todo created`);
    })
    .catch((err) => {
        console.log(`Sorry!!, Todo can't be created`);
    });
};


exports.updateTodo = (req, res) => {
    const todoId = req.params.id;
    // console.log(todoId);
    const info = req.body.info;
    const completed = req.body.completed;
    const updateInfo = {info: info, completed: completed};
    todoModel.updateOne({_id: todoId}, updateInfo)
    .then((result) =>{
        res.send(`Record updated`);
    })
    .catch((err) => {
        console.log(`Sorry!!, record not updated`);
    })
};

exports.deleteTodo = (req, res) => {
  const todoId = req.params.id;
  todoModel.deleteOne({_id: todoId})
  .then((result) => {
    res.send(`Record Deleted`);
  })
  .catch((err) => {
    console.log(`Sorry!! Couldn't delete record`);
  })
};