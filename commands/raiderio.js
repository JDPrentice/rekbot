module.exports = {
    name: 'raiderio',
    description: "calls the raider.io API to show the character's best runs in the season",
    execute(message, args) {

        const fetch = require('node-fetch');
        let url = `https://raider.io/api/v1/characters/profile?region=eu&realm=${args[0]}&name=${args[1]}&fields=mythic_plus_best_runs`;

        fetch(url)
            .then(response => {
                console.log("raiderio command used - raider.io API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    message.channel.send(`${data.name}'s (${data.race} ${data.class}) best M+ runs this season are:`);
                    data.mythic_plus_best_runs.forEach(element => {
                        message.channel.send(`**Dungeon:** ${element.dungeon}, **Level cleared:** ${element.mythic_level}, **Completed on:** ${element.completed_at}`);
                    });

            }).catch(error => {
                console.error(error);
                message.reply("The RaiderIO command has failed - you need to use the syntax !raiderio realm character (and make sure the character name is correct!)");
            });
            });
}
}


