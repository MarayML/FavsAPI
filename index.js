require('dotenv').config();
const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./users/routes')
const favsRouter = require('./favs/routes')

require('./database')

/* const port = process.env.PORT */
const port = 3001

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(favsRouter)

app.listen(port, () => {
  console.log('server en: ' + port)
})