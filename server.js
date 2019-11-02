const express = require('express');
const ConnectDB = require('./config/db');

const app = express();

// Connect to DB
ConnectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to ContactKeeper API...' });
});

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});