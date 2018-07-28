import express from 'express';
import mongoose from 'mongoose';

import Article from '../models/article';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.send(articles);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

router.post('/', async (req, res) => {
  try {
    let article = new Article({
      title: req.body.title,
      date: req.body.date,
      url: req.body.url
    });
    article = await article.save();
    res.send(article);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { comments: req.body.comment } },
      { new: true }
    );
    res.send(article);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndRemove(req.params.id);
    res.send(article);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

export default router;
