const Post = require("../models/Post");
const fs = require("fs");
const comment = require("../models/comment");

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  let imageUrl = null;
  if (req.file) {
    imageUrl = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  }
  delete postObject._id;
  const post = new Post({
    ...postObject,
    imageUrl: imageUrl,
    likes: 0,
    usersLiked: [" "],
  });
  post
    .save()
    .then(() => {
      res.status(201).json({
        message: "Message bien enregistrée !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id,
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Message bien modifiée !" }))
    .catch((error) =>
      res.status(403).json({ error: error, message: "Requête non autorisée !" })
    );
};

exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Message supprimée !" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.deleteComments = (req, res, next) => {
  comment
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Commentaire supprimée !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getPostComments = (req, res, next) => {
  comment
    .find({ postId: req.params.id })
    .then((comments) => res.status(200).json(comments))
    .catch((erreur) => res.status(500).json(erreur));
};

exports.getPseudo = (req, res, next) => {
  user
    .find({ pseudo: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((erreur) => res.status(500).json(erreur));
};

exports.likePost = (req, res, next) => {
  let like = req.body.like;
  let userId = req.body.userId;
  let postId = req.params.id;
  console.log(req.body);
  switch (like) {
    case +1:
      Post.updateOne(
        { _id: postId },
        { $push: { usersLiked: userId }, $inc: { likes: +1 } }
      )
        .then(() => res.status(200).json({ message: "Like" }))
        .catch((error) => res.status(400).json({ error }));

      break;

    case 0:
      Post.findOne({ _id: postId })
        .then((post) => {
          if (post.usersLiked.includes(userId)) {
            Post.updateOne(
              { _id: postId },
              { $pull: { usersLiked: userId }, $inc: { likes: -1 } }
            )
              .then(() => res.status(200).json({ message: "Neutre" }))
              .catch((error) => res.status(400).json({ error }));
          }
          if (post.usersDisliked.includes(userId)) {
            Post.updateOne(
              { _id: postId },
              { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 } }
            )
              .then(() => res.status(200).json({ message: "Neutre" }))
              .catch((error) => res.status(400).json({ error }));
          }
        })
        .catch((error) => res.status(404).json({ error }));
      break;

    case -1:
      Post.updateOne(
        { _id: postId },
        { $push: { usersDisliked: userId }, $inc: { dislikes: +1 } }
      )
        .then(() => {
          res.status(200).json({ message: "Dislike" });
        })
        .catch((error) => res.status(400).json({ error }));
      break;

    default:
      console.log(error);
  }
};
