import express from 'express';
// import path from 'path';

export const adminRoutes = express.Router();

export const products: { title: string }[] = [];

adminRoutes.get('/add-product', (req, res) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  res.render('add-product');
});

adminRoutes.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});
