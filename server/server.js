const express = require('express');
const morgan = require('morgan');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./model/user.js');

const server = express();

// Middlewares
server.use(express.json());
server.use(morgan('combined'));

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username, password: password })
      .then((user) => {
        if (!user) {
          // User not found
          return done(null, false);
        }
        if (user.password !== password) {
          // Incorrect password
          return done(null, false);
        }
        // User found and password matches
        return done(null, user);
      })
      .catch((err) => {
        // Error occurred
        return done(err);
      });
  })
);

server.get('/login', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.post('/login', (req, res, next) => {
  passport.authenticate(
    'local',
    { failureRedirect: '/login' },
    async (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res
          .status(401)
          .json({ message: 'Invalid username or password' });
      }
      res.json({ success: true });
    }
  )(req, res, next);
});

server.listen(8080, () => {
  console.log('Server Started...');
});
