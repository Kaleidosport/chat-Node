// const { io } = require("socket.io-client")
let socket = io()
let messages = document.getElementById("messages")
let form = document.getElementById("form")
let input = document.getElementById("input")

let lastTenMessages = message => {
    let item = document.createElement("li")
    let date = new Date(message.time).toLocaleString("en-BE")
    item.innerText = `${date} - ${message.message}`
    messages.prepend(item)
}

socket.on(`Load previous messages`, data => {
    data.sort((a, b) => a.time < b.time).forEach(message => { // reverse()? >, < or - for sort()???
        lastTenMessages(message)
    })
})

// socket.on(`New user`, data => {
//     let user = document.createElement("li")
//     user.innerText = data
//     messages.append(user)
// })

form.addEventListener("submit", e => {
    e.preventDefault()
    if (input.value) {
        socket.emit("Chat message", input.value)
        input.value = ""
    }
})

socket.on("Chat message", msg => {
    let item = document.createElement("li")
    let date = new Date().toLocaleString("en-BE")
    item.textContent = `${date} - ${msg}`
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})