var express = require('express');
var router = express.Router();
const Meals = require('../controllers/controller.meal');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// give a response random meal from american, Chinese, Inodonesia
router.post('/meals', Meals.randomMeal);

module.exports = router;
