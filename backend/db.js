const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:yhi8RZYRg74u8kJr@cluster0.kt0vyvv.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}