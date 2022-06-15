import express from 'express'
import {formations} from "./data/formations.data.js";

const app = express()
const port = 3000

const API_KEY = '395a9cce-6ffc-48b8-8372-b95089c3abc6'


app.get('/formations', (req, res) => {
  const apiKeyFromHeader = req.headers['x-api-key']
  if (API_KEY !== apiKeyFromHeader) {
    res.status(401).send({code: 401, error: 'FORBIDDEN'})
    return
  }
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
