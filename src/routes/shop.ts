import express from 'express';
// import path from 'path';
import { products } from './admin';

export const shopRoutes = express.Router();

shopRoutes.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  res.render('shop', { products, docTitle: 'Shop' });
});
