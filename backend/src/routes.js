const express = require('express');
const routes = new express.Router();
const multer = require('multer');
const PostController = require('./controllers/PostController');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);





routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store);


module.exports = routes;