const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const userRoutes = require('./services/routes/userRoutes')
const connectionDB = require('./services/connection/MongoDBCon')
const bodyParser = require('body-parser')
const cors = require('cors')
connectionDB()
app.use(bodyParser.json())
app.use(cors())
app.use('/', userRoutes)




app.listen(port , ()=>{
    console.log("start server");
})