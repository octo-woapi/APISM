const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const result = {
    success: true
  }
  res.send(result)
})

app.listen(port, () => {
  console.log(`Dummy api listening on port ${port}`)
})
