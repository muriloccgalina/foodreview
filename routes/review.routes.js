import express from "express";

const review = express.Router();

review.get('/', (req, res) => {
    res.send('Rota de Review');
});

export default review;