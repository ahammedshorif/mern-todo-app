const zod = require("zod")

const createTode = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTode: createTode,
    updateTodo: updateTodo
}