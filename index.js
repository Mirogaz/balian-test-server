require('dotenv').config({path:__dirname+'/.env'})
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on('message', async (msg) => {
	const chatId = msg.chat.id;

	if (msg.text === '/start') {
		await bot.sendMessage(chatId, 'Сайт', {
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: 'Сайт',
							web_app: {
								url: process.env.WEB_APP_URL,
							},
						},
					],
				],
			},
		});
	}
});
