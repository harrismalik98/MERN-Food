const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/food");

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength:3,
        maxlength:10,
        required: true,
        unique: true,
        trim:true //Remove Front and back spaces
    },
    category: {
        type: String,
    },
    info: {
        type: String,
    },
    glass:{
        type: String,
    },
    instructions: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    img: {
        type: String,
        required: true,
        unique: true
    }
}
// , { validateBeforeSave: false } //It tells whether to apply above validation or not.
);

// Controller validation is focused on ensuring that the request data is valid before performing any actions with it. 
// The basic concept is to check that input data meets certain criteria before processing it in the controller.


const Food = mongoose.model('Food', foodSchema);

module.exports = Food;