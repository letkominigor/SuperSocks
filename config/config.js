const session = require('express-session');
const FileStore = require('session-file-store')(session);

const SALT_ROUNDS = 10;

const sessionConfig = {
  store: new FileStore({ logFn() {} }),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'skel',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

module.exports = {
  SALT_ROUNDS,
  sessionConfig,
};
