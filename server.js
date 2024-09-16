const express = require('express');
const path = require('path');
// const { clog } = require('./middleware/clog.js');
const api = require('./routes/notesRoutes');
const htmlRoutes = require('./routes/index.js');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));