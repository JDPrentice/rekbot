module.exports = {
    name: 'server',
    description: "displays server information",
    execute(message, args){
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        message.channel.send(`The server is based in ${message.guild.region}`);
    }
}