var express = require('express');
var passport = require('passport');

var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login/password', 
function(req, res, next) {
  console.log(req.headers);
  console.log(req.body);
  next();
},
passport.authenticate('local', {
  failureRedirect: '/login',
  failureMessage: true
}),
function(req, res, next) {
  console.log('AUTHED USER!');
  console.log(req.user);
  
  res.format({
    'text/html': function() {
      res.redirect('/');
    },
    
    'application/json': function() {
      console.log('TODO: Send JSON response');
      
      res.json({ status: 'ok', location: '/' });
      
    },

    default: function() {
      res.redirect('/');
    },
  });
}
);

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
