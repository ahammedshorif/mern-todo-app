const express = require("express");
const { createTode, updateTodo } = require("./types");
const { todo } = require("./db")
const mongoose = require("mongoose");
var cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post("/todo", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTode.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(403).json({
            msg: "You send wrong inputs"
        })
        return;
    }
    //put it mongoDB

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "todo is cteated ☺"
    })

})


app.get("/todos", async (req,res)=>{
    const todos = await todo.find({});
    console.log(todos);

    res.json({
        todos
    })
    
})



app.put("/completed", async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(403).json({
            mag: "You send wrong inputs"
        })
        return;
    }
    const id = new mongoose.Types.ObjectId(req.body.id);
    await todo.updateOne({
        _id : id ,
    },{
        completed: true,
      })

    res.json({
        msg: "todo mark as completed"
    })

})

app.listen(3000,()=>{
    console.log("app lintening on 3000");
    
})