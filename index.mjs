import express from 'express'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(index.html)
})

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})