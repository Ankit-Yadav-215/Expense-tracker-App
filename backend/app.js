
const express = require('express')
const cors = require('cors')
const app = express()
const {db} = require('./db/db')
const {readdirSync, readdir} = require('fs')


require('dotenv').config()

const PORT = process.env.PORT 

app.use(express.json())
app.use(cors({}))


readdirSync('./routes').map((routes) => app.use('/api/v1', require('./routes/' + routes)))



const server = () => {

    // console.log('you are listening on port ' + PORT + '...')
    db()
    app.listen(PORT, () => {
        console.log('you are listening on port ' + PORT + '...')
    })
}

server()