var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var dateTimeStore = dateTime;

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
]

module.exports = {
    name: 'calendar',
    description: 'sends a message to react to and pins it',
    execute(message, args) {
        if(args[0] == "from") {
            if(args[1]) {
                if(Number.isInteger(parseInt(args[1]))) {
                    var month = (today.getMonth()+1);
                    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                        if(parseInt(args[1])>31) {
                            message.channel.send("ERROR!\n\nCan't schedule a game for after the month is over!");
                            return
                        }
                    } else if(month == 2) {
                        if(parseInt(args[1])>28) {
                            message.channel.send("ERROR!\n\nCan't schedule a game for after the month is over!");
                            return
                        }
                    } else if(month == 4 || month == 6 || month == 9 || month == 11) {
                        if(parseInt(args[1])>30) {
                            message.channel.send("ERROR!\n\nCan't schedule a game for after the month is over!");
                            return
                        }
                    }
                    message.channel.send('~ '+dateTimeStore + ' ~\n\nReact to this message with the dates you can play a game!').then(sentEmbed => {
                        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                            remainingDays = 31-args[1];
                            console.log(remainingDays);
                            if(remainingDays < 20) {
                                for(i = args[1]-1; i < 31; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.pin()
                            } else {
                                for(i = parseInt(args[1])-1; i < 20+parseInt(args[1])-1; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.channel.send(dateTimeStore + '\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                                    for(i = 20+parseInt(args[1])-1; i < 31; i++) {
                                        sentEmbed2.react(dates[i]);
                                    }
                                    sentEmbed2.pin().then(sentEmbed.pin());
                                });
                            }
                        } else if(month == 2) {
                            remainingDays = 28-args[1];
                            console.log(remainingDays);
                            if(remainingDays < 20) {
                                for(i = args[1]-1; i < 28; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.pin()
                            } else {
                                for(i = parseInt(args[1])-1; i < 20+parseInt(args[1])-1; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.channel.send(dateTimeStore + '\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                                    for(i = 20+parseInt(args[1])-1; i < 28; i++) {
                                        sentEmbed2.react(dates[i]);
                                    }
                                    sentEmbed2.pin().then(sentEmbed.pin());
                                });
                            }
                        } else if(month == 4 || month == 6 || month == 9 || month == 11) {
                            remainingDays = 30-args[1];
                            console.log(remainingDays);
                            if(remainingDays < 20) {
                                for(i = args[1]-1; i < 30; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.pin()
                            } else {
                                for(i = parseInt(args[1])-1; i < 20+parseInt(args[1])-1; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.channel.send(dateTimeStore + '\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                                    for(i = 20+parseInt(args[1])-1; i < 30; i++) {
                                        sentEmbed2.react(dates[i]);
                                    }
                                    sentEmbed2.pin().then(sentEmbed.pin());
                                });
                            }
                        }
                    });
                } else if(args[1]=="today") {
                    var todaysDate = parseInt(today.getDate());
                    var month = (today.getMonth()+1);
                    console.log(todaysDate);
                    message.channel.send('~ '+dateTimeStore + ' ~\n\nReact to this message with the dates you can play a game!').then(sentEmbed => {
                        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                            remainingDays = 31-todaysDate;
                            console.log(remainingDays);
                            if(remainingDays < 20) {
                                for(i = todaysDate-1; i < 31; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.pin()
                            } else {
                                for(i = parseInt(todaysDate)-1; i < 20+parseInt(todaysDate)-1; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.channel.send(dateTimeStore + '\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                                    for(i = 20+parseInt(todaysDate)-1; i < 31; i++) {
                                        sentEmbed2.react(dates[i]);
                                    }
                                    sentEmbed2.pin().then(sentEmbed.pin());
                                });
                            }
                        } else if(month == 2) {
                            remainingDays = 28-todaysDate;
                            console.log(remainingDays);
                            if(remainingDays < 20) {
                                for(i = todaysDate-1; i < 28; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.pin()
                            } else {
                                for(i = parseInt(todaysDate)-1; i < 20+parseInt(todaysDate)-1; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.channel.send(dateTimeStore + '\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                                    for(i = 20+parseInt(todaysDate)-1; i < 28; i++) {
                                        sentEmbed2.react(dates[i]);
                                    }
                                    sentEmbed2.pin().then(sentEmbed.pin());
                                });
                            }
                        } else if(month == 4 || month == 6 || month == 9 || month == 11) {
                            remainingDays = 30-todaysDate;
                            console.log(remainingDays);
                            if(remainingDays < 20) {
                                for(i = todaysDate-1; i < 30; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.pin()
                            } else {
                                for(i = parseInt(todaysDate)-1; i < 20+parseInt(todaysDate)-1; i++) {
                                    sentEmbed.react(dates[i]);
                                }
                                sentEmbed.channel.send(dateTimeStore + '\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                                    for(i = 20+parseInt(todaysDate)-1; i < 30; i++) {
                                        sentEmbed2.react(dates[i]);
                                    }
                                    sentEmbed2.pin().then(sentEmbed.pin());
                                });
                            }
                        }
                    });
                } else {
                    message.channel.send("ERROR!\n\n'from' argument must be a number!");
                }
            }
        } else if(args[0]=="results") {

        } else if(!args[0]) {
            var month = (today.getMonth()+1);
            message.channel.send('~ '+dateTimeStore + ' ~\n\nReact to this message with the dates you can play a game!').then(sentEmbed => {
                if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                    for(i = 0; i < 20; i++) {
                        sentEmbed.react(dates[i]);
                    }
                    sentEmbed.channel.send('~ '+dateTimeStore + ' ~\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                        for(i = 20; i < 31; i++) {
                            sentEmbed2.react(dates[i]);
                        }
                        sentEmbed2.pin().then(sentEmbed.pin());
                    });
                } else if(month == 2) {
                    for(i = 0; i < 20; i++) {
                        sentEmbed.react(dates[i]);
                    }
                    sentEmbed.channel.send('~ '+dateTimeStore + ' ~\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                        for(i = 20; i < 28; i++) {
                            sentEmbed2.react(dates[i]);
                        }
                        sentEmbed2.pin().then(sentEmbed.pin());
                    });
                } else if(month == 4 || month == 6 || month == 9 || month == 11) {
                    for(i = 0; i < 20; i++) {
                        sentEmbed.react(dates[i]);
                    }
                    sentEmbed.channel.send('~ '+dateTimeStore + ' ~\n\nDiscord reaction limit reached! React to this message with the rest of the dates!').then(sentEmbed2 => {
                        for(i = 20; i < 30; i++) {
                            sentEmbed2.react(dates[i]);
                        }
                        sentEmbed2.pin().then(sentEmbed.pin());
                    });
                }
            });
        } else if(args[0]!='confirm') {
            message.channel.send('ERROR!\n\nUnknown argument!');
        }
    }
}