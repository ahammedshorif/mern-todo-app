
/*
todo {
 title: string,
 description: string,
 completed: bool
}
*/

const mongoose = require("mongoose")
//.env
const dotenv = require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}