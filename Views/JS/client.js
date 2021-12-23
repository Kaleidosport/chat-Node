// const { io } = require("socket.io-client")
let socket = io()
let messages = document.getElementById("messages")
let form = document.getElementById("form")
let input = document.getElementById("input")

let lastTenMessages = message => {
    let item = document.createElement("li")
    item.innerText = message.message
    messages.prepend(item)
}

socket.on(`Load previous messages`, data => {
    data.sort((a, b) => a._id < b._id).forEach(message => { // reverse()? >, < or - for sort()???
        lastTenMessages(message)
    })
})

form.addEventListener("submit", e => {
    e.preventDefault()
    if (input.value) {
        socket.emit("Chat message", input.value)
        input.value = ""
    }
})

socket.on("Chat message", msg => {
    let item = document.createElement("li")
    item.textContent = msg
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})