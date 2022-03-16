import express from 'express';
import path from 'path';

export const shopRoutes = express.Router();

shopRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});
