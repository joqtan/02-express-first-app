import express from 'express';

export const adminRoutes = express.Router();

adminRoutes.get('/add-product', (req, res) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
});

adminRoutes.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});
