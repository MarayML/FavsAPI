const express = require('express')
const userRouter = require('./users/routes')
const favsRouter = require('./favs/routes')

require('./database')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(favsRouter)

app.listen(port, () => {
  console.log('server en: ' + port)
})