const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    /**
     * @param {Client} client
     * @param {Message} Message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const text = args.slice(0).join(' ')
        if (!text) return message.reply({ content: 'Say Message To Send!' })
        message.channel.send({ content: `${text}`})
    }
}