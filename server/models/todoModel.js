const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    info: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;