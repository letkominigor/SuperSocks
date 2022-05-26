require('@babel/register');
const path = require('path');
const express = require('express');
const session = require('express-session');

const indexRouter = require('./routes/views/index.router');
const registerRouter = require('./routes/views/register.router');
const loginRouter = require('./routes/views/login.router');
const creatorRouter = require('./routes/views/socksCreator.router');
const logoutRouter = require('./routes/views/logout.router');
const personalAccount = require('./routes/views/personalAccount.router');

const { sessionConfig } = require('./config/config');

const app = express();

const PORT = 3000;

const publicPath = path.resolve('public');

app.use(session(sessionConfig));

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/creator', creatorRouter);
app.use('/socks-list', personalAccount);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port: ', PORT);
});
