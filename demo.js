#!/usr/bin/env node

const
app = require('express')(),
clientSessions = require("client-sessions");

app.use(clientSessions({
  secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK' // CHANGE THIS!
}));

app.get('/', function (req, res){
  if (req.session_state.username) {
    res.send('Welcome ' + req.session_state.username + '! (<a href="/logout">logout</a>)');
  } else {
    res.send('You need to <a href="/login">login</a>.');
  }
});

app.get('/login', function (req, res){
  req.session_state.username = 'JohnDoe';
  console.log(req.session_state.username + ' logged in.');
  res.redirect('/');
});

app.get('/logout', function (req, res) {
  req.session_state.reset();
  res.redirect('/');
});

app.listen(3000);
