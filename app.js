// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
