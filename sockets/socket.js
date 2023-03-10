const { io } = require('../index')

io.on('connection', client => {
    console.log('Client connected...')

    client.on('disconnect', () => {
        console.log('Client disconnected')
    })

    client.on('newMessage', (payload) => {
        console.log('Mensaje!!! ', payload)

        io.emit('newMessage', { admin: 'New message' })
    })
})
