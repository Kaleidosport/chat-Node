let socket = io()
let messages = document.getElementById("messages")
let form = document.getElementById("form")
let input = document.getElementById("input")

socket.on(`message`, data => {
    console.log(data)
    appendMessages(data)
})

socket.on(`output-messages`, data => {
    console.log(data)
    if (data.length) {
        data.forEach(message => {
            appendMessages(message.msg)
        })
    }
})

form.addEventListener("submit", e => {
    e.preventDefault()
    socket.emit(`Chat message`, form.msg.value)
    console.log(`Submit from form`, form.msg.value)
    form.msg.value = ""
    // if (input.value) {
    //     socket.emit("Chat message", input.value)
    //     input.value = ""
    // }
})

// socket.on("Chat message", msg => {
//     let item = document.createElement("li")
//     item.textContent = msg
//     messages.appendChild(item)
//     window.scrollTo(0, document.body.scrollHeight)
// })