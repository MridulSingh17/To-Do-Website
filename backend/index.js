const express=require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const app=express();
app.use(express.json());

// basic express boiler plate code
// with express.json() middleware

app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log(parsedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong inputs."
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo Created. "
    })

})

app.get("/todos",async (req,res)=>{
    const todos= await todo.find({});
    res.json({
        todos
    })

})
app.put("/completed",async (req,res)=>{
    const updatePayload= req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong inputs."
        })
        return;
    }
    await todo.update({
        _id: req.body._id
    })
    res.json({msg:"To-Do marked as done."})
})
app.listen(3000);