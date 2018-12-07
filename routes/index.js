let express = require('express');
let router = express.Router();
let app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.listen(4000);

module.exports = router;
