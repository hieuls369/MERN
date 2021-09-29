const PostModel = require("../models/PostModel");

module.exports = {
  getPosts: async (req, res) => {
    try {
      const posts = await PostModel.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  createPosts: async (req, res) => {
    try {
      const newPost = req.body;
      const post = new PostModel(newPost);
      await post.save();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  updatePosts: async (req, res) => {
    try {
      const updatePost = req.body;
      const post = await PostModel.findOneAndUpdate(
        { _id: updatePost._id },
        updatePost,
        { new: true }
      );

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
