const { on } = require('../index')
const client = require('../index')
const arrayOfStatuses = [
    '1',
    '2',
    '3',
    '4',
    '5'
]

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`)
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatuses[Math.floor(Math.random() * arrayOfStatuses.length)] }], status: 'online', type: "WATCHING" })
    }, 5000)
})