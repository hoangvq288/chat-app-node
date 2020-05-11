const users = []

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate data
    if (!username || !room)
        return { error: 'Username and Room are required' }
    
    // Check for existing user
    const existingUser = users.find(user => user.room === room && user.username === username)
    if (existingUser) return { error: 'Username is in use.'}

    const user = { id, username, room }
    users.push(user)
    return { user }
}


const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id)
    
    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find(user => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter(user => user.room === room)
}


// addUser({id: 1, username: 'Hoang', room: 'DoTa'})
// addUser({id: 2, username: 'Phuong', room: 'dota'})
// addUser({id: 3, username: 'Hoang', room: 'lol'})
// console.log(getUser(13))
// console.log(getUsersInRoom('fair'))

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}