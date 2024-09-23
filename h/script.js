const express = require('express');
const axios = require('axios');

const app = express();

// Replace with your actual bot token
const BOT_TOKEN = '8119981730:AAGZE5e61fgJfX21xelRjCMAeyGYE35Yz9A';

// Function to fetch user information from Telegram using the bot token
async function fetchUserData(userId) {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMember`, {
      params: {
        chat_id: userId,
        user_id: userId
      }
    });

    return response.data.result;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

// Endpoint to handle user data requests
app.get('/getUserData', async (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  const userData = await fetchUserData(userId);

  if (!userData) {
    return res.status(500).json({ error: 'Error fetching user data' });
  }

  res.json(userData);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
