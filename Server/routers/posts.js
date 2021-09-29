const express = require("express");
const { updatePosts } = require("../controllers/posts");
const Posts = require("../controllers/posts");
const createPosts = Posts.createPosts;
const getPosts = Posts.getPosts;

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPosts);

router.post("/update", updatePosts);

module.exports = router;
