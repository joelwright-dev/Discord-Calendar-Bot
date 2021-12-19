# Discord Calendar Bot

This Discord bot assists in the organization of events using a date system.

## Installation

Install [node.js](https://nodejs.org/en/)

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm i discord.js --save
```

## Usage

Go to the [Discord Applications](https://discord.com/developers/applications) page and click New Application.<br>
Enter the display name for the bot for your server.<br>
Go to bot on the left hand side of the screen.<br>
Click Add Bot.<br>
Scroll down and toggle options: Presence Intent, Server Members Intent, Message Content Intent under the Priveleged Gateway Intents section.<br>
To the right of the bot icon click Copy under Token.<br>
Paste the token into the last line of index.js (replacing the text TOKEN).<br>

Example (the bot's token is 4e33rrsd. This will be very different for you):<br>
client.login('4e33rrsd');

Use this [discord permissions calculator](https://discordapi.com/permissions.html) to get an invite link for your bot.<br>
Select all the checkboxes.<br>
Copy the application id from the main page of your application in the [Discord Applications](https://discord.com/developers/applications) page.<br>
Enter that in the Client ID field of the permissions calculator.<br>
Click the link at the bottom and select the server to add the bot to.

Run Bot
```bash
node index.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
