const mongoose= require("mongoose");
const { boolean } = require("zod");
//mongodb+srv://mr  ulsingh17:X0OExYglcjne4aPn@cluster0.oavk6.mongodb.net/

mongoose.connect("mongodb+srv://mridulsingh17:X0OExYglcjne4aPn@cluster0.oavk6.mongodb.net/");

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
     
})

const todo =mongoose.model('todos',todoSchema);

module.exports={
    todo:todo
}