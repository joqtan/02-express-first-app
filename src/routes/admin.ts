import express from 'express';
import path from 'path';

export const adminRoutes = express.Router();

adminRoutes.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

adminRoutes.post('/add-product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});
