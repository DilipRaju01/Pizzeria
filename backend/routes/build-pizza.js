var express = require('express');
var router = express.Router();
const {Ingredients}=require("./ingredients.model");

/* GET users listing. */
router.get('/build-pizza', function(req, res, next) {
  Ingredients.find()
  .then((ingredients)=>{
    res.send(ingredients)
  })
});

module.exports = router;
