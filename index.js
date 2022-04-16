const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./config/mongoose')

// use for parsing body from a form
app.use(express.urlencoded({extended:false}))


// loading all routes
app.use('/', require('./routes'))


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})