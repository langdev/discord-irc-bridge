const discordIRC = require('./dist').default;

const nickname = process.env.NICKNAME || 'LangDev';
const discordToken = process.env.DISCORD_TOKEN;

const config = [
    {
        nickname,
        server: 'irc.ozinger.org',
        ircOptions: {
            port: 6697,
            secure: true,
            selfSigned: true,
        },
        discordToken,
        channelMapping: {
            '#langdev': '#langdev',
            '#rust': '#rust',
            '#investment': '#investment',
        },
        ircNickColor: true,
        preventMentionToAuthor: true,
    },
];

discordIRC(config);
