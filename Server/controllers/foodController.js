const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // For handling request body or req.body

const Food = require("../models/foodModel");


// ============================ GET METHOD ============================ //
const get = async(req, res) => {

    try{
        const data = await Food.find();
        res.status(200).send(data);
    }
    catch(error){
        res.status(400).send(error);
    }

    // Food.find((error, data) => {
    //     if (error) {
    //         res.status(400).send(error);
    //     } else {
    //         res.status(200).send(data);
    //     }
    // });
}



// ============================ POST METHOD ============================ //
const post = async(req, res) => {

    // const name = req.body.name;
    // const category = req.body.category;
    // const info = req.body.info;
    // const glass = req.body.glass;
    // const instructions = req.body.instructions;
    // const ingredients = req.body.ingredients; 
    // const img = req.body.img;

    // const food = new Food({
    //     name: name,
    //     category: category,
    //     info: info,
    //     glass: glass,
    //     instructions: instructions,
    //     ingredients: ingredients,
    //     img: img
    // });

    try{
        const food = new Food(req.body);
        // console.log(req.body);

        await food.save();
        res.status(201).send("Data Save Successfully");
    }
    catch(error){
        console.log(error);
        res.status(400).send("Data Not Save Successfully")
    }

    // food.save(function (err) {
    //     if (err) {
    //         res.status(400).send("Data Not Save Successfully");
    //     }
    //     else {
    //         res.status(201).send("Data Save Successfully");
    //     }
    // });
}



// ============================ GET SPECIFIED USER METHOD ============================ //
const getSpecifiedFood = async(req, res) => {

    try{
        const id = req.params.id;
        const data = await Food.findById(id);
        res.status(200).send(data);
    }
    catch(error){
        res.status(400).send(error);
    }
    

    // Food.findById(id, function(err, data){
    //     if(err){
    //         res.status(400).send(err);
    //     }
    //     else{
    //         res.status(200).send(data);
    //     }
    // });
}


module.exports = {get, post, getSpecifiedFood};