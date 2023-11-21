### Rekbot - Discord bot

Just a small project for a general bot, initial focus has been on raider.io API calls in preparation for the release of Shadowlands. The commands are modular so if you wanted to use any just pick what you like.

Requires node-fetch to be installed.

#### Commands (as of 05/09/2020)

```
!help 
!server - shows the stats for the discord server
!valorant - simple link to the valorant news page
!raiderio {realm} {character} - shows the top M+ runs for the entered character, currently configured for EU realms
!mythicplus - shows the M+ affixes for the current week
!dbwrite - write a message to the SQLite DB
!dbread {author} - pull messages from the database made by the entered username
!dbrandom - pull a random message back from the database

```

### To do list

- add access to bot stats (information about what servers it's running on etc)
- continue working on raider.io commands
