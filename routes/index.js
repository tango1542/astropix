var express = require('express');
var apod = require('../apod/apodService');

var router = express.Router();


router.get('/', function(req, res, next) {
// This  route gets the picture
  res.redirect('fetch_picture');
});


// This route fetches a picture from the API.
router.get('/fetch_picture', function(req, res, next){


  console.log('RANDOM? '  + req.query.random );
    apod(function(err, apod_data){

      if (err) {
        return res.render('apod_error', {error: err.message, title : "Error"});
      }
      else {
        return res.render('index', { apod : apod_data, title : "APOD for " + apod_data.date });
      }

    }, req.query.random);

});

module.exports = router;
