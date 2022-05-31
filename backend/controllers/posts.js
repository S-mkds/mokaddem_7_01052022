const Post = require("../models/Post");
const fs = require("fs");

exports.createPost = (req, res, next) => {
  const postObject = req.body;
  delete postObject._id;
  const post = new Post({
    ...postObject,
    imageUrl: null, // `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    likes: 0,
    dislikes: 0,
    usersLiked: [" "],
    usersdisLiked: [" "],
  });
  post
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post bien enregistrée !",
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
    .then(() => res.status(200).json({ message: "Post bien modifiée !" }))
    .catch((error) =>
      res.status(403).json({ error: error, message: "Requête non autorisée !" })
    );
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Post supprimée !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
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
