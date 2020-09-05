module.exports = {
    name: 'mythicplus',
    description: "calls the raider.io API to show this week's M+ affixes",
    execute(message, args) {

        const fetch = require('node-fetch');
        let url = "https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en";

        fetch(url)
            .then(response => {
                console.log("mythicplus command used - raider.io API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    //message.channel.send("mythic plus affixes for this week are: " + data.title + "\n" + data.affix_details);
                    message.channel.send("The Mythic+ affixes for this week are:");
                    data.affix_details.forEach(element => {
                        message.channel.send({"embed": {
                            "title": element.name,
                            "url": element.wowhead_url,
                            "description": element.description
                        }})
                    });
                }).catch(error => {
                    console.error(error);
                });
                

            }).catch(error => {
                console.error(error);
                message.reply("The Mythic Plus command has failed");
            });
    }
}
