const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing crucial error handling for missing or malformed request body
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing user name or email' });
  }
  // ... rest of the user creation logic ...
});
app.listen(3000, () => console.log('Server listening on port 3000'));