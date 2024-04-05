const mongoose=require("mongoose")

let ingredientScheme=new mongoose.Schema({
    "_id": {
      "$oid": String
    },
    "id": Number,
    "tname":String,
    "price": Number,
    "image":String
  },{collection:"ingredients"})

exports.Ingredients=new mongoose.model("Ingredients",ingredientScheme);

