var express = require('express');
var router = express.Router();
const {Pizzas}=require("./pizzas.model");
/* GET users listing. */
router.get('/order-pizza', function(req, res, next) {
  Pizzas.find()
  .then((pizzas)=>{
    res.send(pizzas);
  })
  .catch((error)=> console.log(error));
});

module.exports = router;
