const express = require('express');
const posts = require('../data/posts');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(posts);
})

// some

module.exports = router;