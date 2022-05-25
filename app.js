require('@babel/register');
const path = require('path');
const express = require('express');

const indexRouter = require('./routes/views/index.router');
const registerRouter = require('./routes/views/register.router');

const app = express();

const PORT = 3000;

const publicPath = path.resolve('public');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/register', registerRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port: ', PORT);
});
