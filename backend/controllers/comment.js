const Comment = require("../models/comment.js");
const fs = require("fs");

exports.createComment = (req, res, next) => {
  const commentObject = req.body;
  let userId = req.body.userId;
  delete commentObject._id;
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

exports.deleteComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then((comment) => {
      const filename = comment.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Comment.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Comment supprimée !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};
