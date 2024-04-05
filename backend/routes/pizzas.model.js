const mongoose=require("mongoose")

let pizzaSchema=new mongoose.Schema({
    "_id": {
      "$oid": String
    },
    "id": String,
    "type": String,
    "price": Number,
    "name": String,
    "image": String,
    "description":String,
    "ingredients":Array,
    "topping": Array
  },{collection:"pizzas"})

exports.Pizzas=new mongoose.model("Pizzas",pizzaSchema);

