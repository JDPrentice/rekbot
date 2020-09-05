module.exports = {
    name: 'help',
    description: "this is the help command, it should list available commands",
    execute(message, args){
        message.channel.send('**Available Rekbot commands are as follows:**');
    
    }
}