const express = require('express')
const app = express()

const categories = require('./data/categories.json');
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories', (req,res) =>{
    res.send(categories);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})