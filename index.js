const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
const prefix = '!';
const fs = require('fs');

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var dateTimeStore = dateTime;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('BGG Calendar is online!');
});

const dates = [
    '922025011571748915',
    '922025011563360256',
    '922025011294900265',
    '922025011424944159',
    '922025011655626753',
    '922025011139723367',
    '922025011588526101',
    '922025011542368267',
    '922025011571740712',
    '922025011475271690',
    '922025011768877086',
    '922025011240382537',
    '922025011412369409',
    '922025011538198539',
    '922025011429122078',
    '922025011424923688',
    '922025011647229973',
    '922025011114541067',
    '922025011378782218',
    '922026223360675861',
    '922025011387199498',
    '922025011387170826',
    '922025011353624656',
    '922025011164905493',
    '922025010976141354',
    '922025010892275713',
    '922025011299119154',
    '922025011424952330',
    '922025011005513729',
    '922025011236200468',
    '922025011273932820'
];

const results = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];

client.on('messageReactionAdd', (reaction, user) => {
    let message = reaction.message, emoji = reaction.emoji;

    var i = dates.indexOf(emoji.id);
    console.log(i);
    results[i]+=1;
    console.log(results);
});

client.on('messageReactionRemove', (reaction, user) => {
    let message = reaction.message, emoji = reaction.emoji;

    var i = dates.indexOf(emoji.id);
    console.log(i);
    results[i]-=1;
    console.log(results);
});

client.on('message', message => {
    if(message.author.bot && message.content.startsWith('~')) {
        console.log('removing previous results')
        for(i = 0; i < 31; i++) { 
            results[i]=0;
        }
    }

    if (message.author.bot && message.type === 'CHANNEL_PINNED_MESSAGE') {
        message.delete();
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'calendar') {
        if(args[0] == 'results') {
            message.channel.send("Are you sure you want to get the results of the current calendar? This will prevent any new availabilities from being added.\n\nReact with '!calendar confirm' to confirm decision.").then(client.on('message', message => {
                if(!message.content.startsWith(prefix) || message.author.bot) return;

                const args = message.content.slice(prefix.length).split(/ +/);
                const command = args.shift().toLowerCase();

                if(command == 'calendar') {
                    if(args[0] == 'confirm') {
                        message.channel.send(dateTime + '\n\nHere are the results for the latest calendar made!').then(sentEmbed => {
                            sentEmbed.pin();
                        })
                        for(i = 0; i < 31; i++) {
                            if((results[i]-1) > 0) {
                                message.channel.send('<:' + (i+1).toString() + ':' + dates[i] + '>: ' + (results[i]-1).toString())
                            }
                        }
                    }
                }
            }));
        }
    }

    client.commands.get(command).execute(message, args)
});

client.login('OTIxODc2MDEwODcyNTAwMzQ1.Yb5R8A.dyp5SYNCkKhNCTNhTtIlpumjO9I');