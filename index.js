// Reminder: think of checking https://ejs.co/

const MONGOOSE = require("mongoose")
const EXPRESS = require("express")
const { Server } = require("socket.io")
const MESSAGE = require("./Models/messages")

require("dotenv").config()

const MONGO_USER = process.env.MONGO_USER
const MONGO_PW = process.env.MONGO_PW
const MONGO_DB = process.env.MONGO_DB

const APP = EXPRESS()
const SERVER = require("http").createServer(APP)
const IO = new Server(SERVER)

require("./Models/users")(APP)

MONGOOSE.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PW}@${MONGO_DB}.5c5eb.mongodb.net/rtc?retryWrites=true&w=majority`)
        .then(() => console.log(`Authentication successful.`))
        .catch(error => console.error(`Unexpected error.`, error))

const PORT = 5000

APP.use("/Views", EXPRESS.static("./Views"))
APP.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

IO.on("connection", socket => {
    console.log(`User connected.`)
    socket.on(`Chat message`, msg => {
        const MESSAGES = new MESSAGE({message: msg})
        MESSAGES.save().then(() => {
            IO.emit(`Chat message`, msg) 
        })        
    })
    socket.on(`disconnect`, () => {
        console.log(`User disconnected.`)
    })
})

SERVER.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}.`)
})

/* Where we at: 
 *
 * https://expressjs.com/en/starter/hello-world.html
 * https://www.npmjs.com/package/mongoose
 * https://nodejs.org/en/docs/
 * https://socket.io/get-started/chat/
 * https://docs.mongodb.com/
 * 
 */