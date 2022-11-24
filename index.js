const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guild,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.on('ready', () => {
    console.log('Bot listo')
})

client.on('messageCreate', (message) => {
    if(message.content === 'sus'){
        message.reply('ඞ')
    }
})

client.login(process.env.TOKEN)