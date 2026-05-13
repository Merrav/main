const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello! This is my first Code Project.');
});

app.get('/about', (req, res) => {
  res.send('This is my about page. I built this website and server myself!');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: rishoomim@gmail.com');
});

app.get('/Process', (req, res) => {
  res.send('Send me an email for my Process list');
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
});console.log('Goto');

