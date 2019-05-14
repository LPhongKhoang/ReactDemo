const express = require("express");

const router = express.Router();

//Item Model
const Item = require("../../models/Item");
// ObjectID
const ObjectID = require("mongoose").ObjectID;

// @route GET api/items
// @desc Get All items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a Post
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items:id
// @desc Delete a item
// @access Public
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then(item => {
      console.log(item);
      item.remove();
    })
    .then(() => res.json({ success: true }))
    .catch(err => {
      res.status(404).json({ success: false, code: id, error: err });
    });
});

module.exports = router;
