module.exports = {
    name: 'mythicplus',
    description: "pulls the raider.io API to show this week's M+ affixes",
    execute(message, args){

        const fetch = require('node-fetch');
        let url = "https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en";

    try {    

        fetch(url)
        .then(response => { 

        console.log("mythicplus should have fired");
        console.log("API Status " + response.statusText + " " + response.url);

        var affixData = response.json(); 

        message.channel.send("mythic plus for this week should be " + affixData);
        });
        }
         

    catch (error){
        console.error(error);
		message.reply("The Mythic Plus command has failed");
                }     
}
}