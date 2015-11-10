var express = require('express');
var router = express.Router();











// THIS IS THE CATCH-ALL ROUTE
router.get('*', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
