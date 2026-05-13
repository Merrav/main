const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/Process', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'process.html'));
});

app.get('/greeting', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'greeting.html'));
});

app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'Prag';
  res.json({ greeting: 'Hello, ' + name + '!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
