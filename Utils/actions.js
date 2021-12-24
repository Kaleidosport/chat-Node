const USERS = []

const JOINING = (id, username) => {
    const USER = {id, username}
    USERS.push(USER)
    return USER
}

const GETUSER = (id) => USERS.find(USER => USER.id === id)

module.exports = {
    JOINING,
    GETUSER
}