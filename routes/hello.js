var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
    title:   'Hello!',
    content: 'これは、サンプルのコンテンツです。<br>This is a sample content.'
  };
  res.render('hello', data);
});

module.exports = router;
