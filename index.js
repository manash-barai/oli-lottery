const express = require('express')
const app = express()
const cors = require("cors")
require("./db")
require("dotenv").config()
const port = process.env.PORT
app.use(express.json())
app.use(cors())


  


app.use("/api/user",require("./route/user"))
app.use("/api/state",require("./route/state"))
app.use("/api/result",require("./route/result"))


app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 