const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => {
  res.json({ message: "Welcome to my personal introduction site!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
