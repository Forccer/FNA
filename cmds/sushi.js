module.exports.run = async (bot, message, args) => {
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(kUser) return message.channel.send(`${message.author} just gave ${kUser} some 🍣`)
    if(!kUser) return message.channel.send(`${message.author} chewed loudly, eating sushi for themself!`);

    if (message.deletable) {
        message.delete().catch(() => {});
      }

    return;
}
      module.exports.help = {
        name: "sushi",
      }
