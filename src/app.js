const express = require('express')
const app = express()
const port = 4000

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.get('/demo', (request, response) => {
  response.send('Hello Demo!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})