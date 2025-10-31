import express from "express"

export const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.get('/test', (req, res) => {
    res.json({message: 'test'})
})

app.get('/test2', (req, res) => {
    res.json({message: 'test2'})
})
