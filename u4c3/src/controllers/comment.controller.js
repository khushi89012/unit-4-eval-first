const express = require("express");
const { body, validationResult } = require("express-validator");

const commentmodel = require("../models/comment.model")

const router = express.Router();

router.post(
    "/",
   
 
    async (req, res) => {
      try {
  const user = await Comment.create(req.body);
  
        return res.status(201).send(user);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
    }
  );
  
  module.exports = router;