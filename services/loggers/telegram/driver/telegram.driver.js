const axios = require("axios");

async function sendMessage(botSecret, chatId, text) {
  try {
    await axios.post(`https://api.telegram.org/${botSecret}/sendMessage?`, {
      chat_id: chatId,
      text,
    });

    return { success: true };
  } catch (err) {
    return { success: false };
  }
}

const getTelegramBot = (botSecret) => (chatId) => (text) =>
  sendMessage(botSecret, chatId, text);

module.exports = getTelegramBot;
