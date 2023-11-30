import express from 'express'
import {formations} from "./data/formations.data.js";

const app = express()
const port = 3000

app.get('/formations', (req, res) => {
  const result = formations().map((formation) => ({id: formation.id}))
  res.send(result)
})

app.get('/formations/:id', (req, res) => {
  const id = req.params.id;
  const result = formations().find((formation) => formation.id === id)
  if (result) {
    res.send(result)
  } else {
    res.status(404).send({code: 404, error: 'NOT_FOUND'})
  }
})

app.listen(port, () => {
  console.log(`Formations api listening on port ${port}`)
})
