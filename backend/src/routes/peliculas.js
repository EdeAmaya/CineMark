import express from 'express';
import multer from 'multer';
import peliculasController from '../controllers/peliculasController.js';

const router = express.Router();

const upload = multer({dest: 'public/'});

router.route("/")
.get(peliculasController.getAllPosts)
.post(upload.single("image"),peliculasController.createPost);

export default router;