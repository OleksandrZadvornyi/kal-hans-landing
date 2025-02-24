import express from 'express';
import { InstagramPost } from '../models/InstagramPost';

const router = express.Router();

// Get all Instagram posts
router.get('/', async (req, res) => {
  try {
    const posts = await InstagramPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Instagram posts' });
  }
});

// Create a new Instagram post
router.post('/', async (req, res) => {
  try {
    const newPost = new InstagramPost(req.body);
    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Instagram post' });
  }
});

export default router;
