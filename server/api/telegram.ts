import { defineEventHandler, readBody } from 'h3';
import { $fetch } from 'ohmyfetch';

const TELEGRAM_TOKEN = '6896483042:AAExZDy6-vkx9Z_uP_vS9ENMzSqagdi4FjA';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if (body.message && body.message.text) {
        const chatId = body.message.chat.id;
        const text = body.message.text;

        await $fetch(`${TELEGRAM_API_URL}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: `You said: ${text}`
            })
        });
    }

    return { status: 'ok' };
});
