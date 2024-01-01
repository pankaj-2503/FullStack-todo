const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pankajpj3103:uSEw9SXPQWJiSQBa@cluster4.ii96xua.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}



