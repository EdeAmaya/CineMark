import peliculasModel from '../models/Peliculas.js';
import {v2 as cloudinary} from 'cloudinary';

import {config} from '../config.js';

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret,
});

const peliculasController = {}

peliculasController.getAllPosts = async (req, res) => {
    const posts = await peliculasModel.find();
    res.json(posts);
}

peliculasController.createPost = async (req, res) => {
    try {
        const { title, description,director,genre,anio,duration } = req.body;
        let imageUrl = ""
        
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'public',
                allowed_formats: ['jpg', 'png', 'jpeg']

            });
            imageUrl = result.secure_url;
        }

        const newPost = new peliculasModel({title, description,director,genre,anio,duration, image: imageUrl })
        newPost.save()
        res.json({message:"post saved"})

    } catch (error) {
        console.log("error" + error);
    }
}

export default peliculasController;  
