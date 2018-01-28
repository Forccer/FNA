module.exports.run = async (bot, message, args) => {
message.channel.send('Pong! Discord Heartbeat: `' + bot.ping + '`ms')
}
  module.exports.help = {
    name: "ping",
  }