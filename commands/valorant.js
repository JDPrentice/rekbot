module.exports = {
    name: 'valorant',
    description: "this will post the latest Valorant patch notes",
    execute(message, args){
        message.channel.send('Valorant patch notes can be found here: https://playvalorant.com/en-us/news/' );
    }
}