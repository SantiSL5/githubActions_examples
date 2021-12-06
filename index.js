const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const chatID = process.env.TELEGRAM_CHAT_ID;
const username = process.env.USERNAME;

const bot = new TelegramBot(token, {polling: true});

async function botMessage() {
    await bot.sendMessage(chatID, 'Workflow ejecutado correctamente tras el último commit. Saludos ' + username);
    console.log('Mensaje enviado');
    process.exit(0);
}

botMessage();
