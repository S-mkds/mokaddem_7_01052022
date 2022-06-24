const Comment = require("../models/comment.js");
const fs = require("fs");

exports.createComment = (req, res, next) => {
  const commentObject = req.body;

  const comment = new Comment({
    ...commentObject,
  });
  comment
    .save()
    .then(() => {
      res.status(201).json({
        message: "Commentaire bien enregistrée !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllComments = (req, res, next) => {
  Comment.find()
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneComment = (req, res, next) => {
  Comment.findOne({
    _id: req.params.id,
  })
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
