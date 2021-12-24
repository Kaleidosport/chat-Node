// const { io } = require("socket.io-client")
let socket = io()
let messages = document.getElementById("messages")
let form = document.getElementById("form")
let input = document.getElementById("input")

const username = window.location.search.substring(1).slice(9).replace(`+`, ` `)
console.log(username) // https://www.youtube.com/watch?v=jD7FnbI76Hg 36:12
socket.emit(`Newcomer`, username)

let lastTenMessages = message => {
    let item = document.createElement("li")
    let date = new Date(message.time).toLocaleString("en-BE")
    item.innerText = `${date} - ${message.message}`
    messages.prepend(item)
}

socket.on(`Load previous messages`, data => data.sort((a, b) => a.time < b.time).forEach(message => lastTenMessages(message)))

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
        input.focus()
    }
})

socket.on("Chat message", msg => {
    console.log(msg)
    let item = document.createElement("li")
    let date = new Date().toLocaleString("en-BE")
    item.textContent = `${date} - ${msg}`
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})

socket.on(`Message`, msg => {
    console.log(msg)
    let item = document.createElement("li")
    item.innerHTML = `<b><span style="color:crimson;">${msg.username}:</span></b> ${msg.content}`
    messages.appendChild(item)
    messages.scrollTop = messages.scrollHeight
})
