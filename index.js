require("dotenv").config()
const express = require("express")
const helment = require("helmet")
const cors = require("cors")
const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-routers")
const cookieParser = require("cookie-parser")

const server = express()
const port = process.env.PORT || 2415

server.use(cors())
server.use(helment())
server.use(express.json())
server.use(cookieParser())
server.use("/auth", authRouter)
server.use("/user", usersRouter)

server.get("/", (req, res, next) => {
    res.json({
        message: "welcome!"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: " uh oh! something went wrong"
    })
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})