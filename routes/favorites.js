var express = require('express');
var router = express.Router();

// This will go to the favorites page
router.get('/', function(req, res, next){
  res.render('favorites', {favorites : req.session.favorites});
});


router.post('/add', function(req, res, next){

  // This creates a favorites array.  Use the CSS page to change the sizing of the image.
  if (!req.session.favorites) {
    req.session.favorites = [];
  }


  var isFav = false;
  for (var i = 0 ; i < req.session.favorites.length; i++) {
    if (req.session.favorites[i].date == req.body.date) {
      // already in the array. Redirect.
      isFav = true;  break;
    }
  }

  if (!isFav) {
// This will add all the information that is available about the favorites object
    req.session.favorites.push(req.body);
  }
  res.redirect('/favorites');

});

module.exports = router;
