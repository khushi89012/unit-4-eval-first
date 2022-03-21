const express = require("express");
const { body, validationResult } = require("express-validator");


const upload = require("../middleware/upload")




// const bookmodel = require("../models/book.model")

const router = express.Router();

router.post(
    "/",
   
    body("likes")
      .not()
      .isNumeric(),


  
    async (req, res) => {
      try {
        
        const errors = validationResult(req);
        console.log({ errors });
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
  
        const user = await Book.create(req.body);
  
        return res.status(201).send(user);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
    }
  );


  router.post("", upload.single("coverImg"), async (req, res) => {
    try {
    
      const user = await User.create({
        firstName: req.body.firstName,
        profilePic: req.file.path,
      });
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
 
  
  module.exports = router;
  
  