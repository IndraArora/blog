const express = require('express');
const router = express.Router();
const { addBlog } = require('../controllers/blogcontroller');
// const mid=req
// const {authentication} = require('../middlewares/authmiddleware');
router.post('/addblog', addBlog);

module.exports = router;
