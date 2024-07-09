import { defineEventHandler, readBody } from 'h3';
import { $fetch } from 'ohmyfetch';

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '6972679785:AAGIcuu3GuMUSU0CJStKRwPRP8qF_HYtROc';
const TELEGRAM_API_URL = `https://api.telegram.org/bot6972679785:AAGIcuu3GuMUSU0CJStKRwPRP8qF_HYtROc`;

// https://api.telegram.org/bot6972679785:AAGIcuu3GuMUSU0CJStKRwPRP8qF_HYtROc/getWebhookInfo

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    console.log('Request body:', body);

    if (body.message && body.message.text) {
        const chatId = body.message.chat.id;
        const text = body.message.text;

        console.log(`Received message: ${text} from chat: ${chatId}`);

        try {
            const response = await $fetch(`${TELEGRAM_API_URL}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    chat_id: chatId,
                    text: `You said: ${text}`
                }
            });

            console.log('Response from Telegram:', response);
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
        }
    }

    return { status: 'ok' };
});
