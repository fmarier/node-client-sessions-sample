#!/usr/bin/env node

const
app = require('express')(),
clientSessions = require("client-sessions");

app.use(clientSessions({
  secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK' // CHANGE THIS!
}));

app.get('/', function (req, res){
  if (req.session.username) {
    res.send('Welcome ' + req.session.username + '! (<a href="/logout">logout</a>)');
  } else {
    res.send('You need to <a href="/login">login</a>.');
  }
});

app.get('/login', function (req, res){
  req.session.username = 'JohnDoe';
  console.log(req.session.username + ' logged in.');
  res.redirect('/');
});

app.get('/logout', function (req, res) {
  req.session.reset();
  res.redirect('/');
});

app.listen(3000);
