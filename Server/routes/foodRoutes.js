const express = require("express");
const router = express.Router(); // create a router object that can be used to group related routes

const controller = require("../controllers/foodController");

//========================= Show ALL Food ===================//
router.get('/', controller.get);


//========================= Create New Food ===================//
router.post("/add_food", controller.post);


//========================= Show food by ID (GET Individual) ===================//
router.get("/:id", controller.getSpecifiedFood);


module.exports = router;