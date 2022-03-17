import express from 'express';
// import path from 'path';

export const adminRoutes = express.Router();

export const products: { title: string }[] = [];

adminRoutes.get('/add-product', (req, res) => {
  // * rendering statically
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  // * rendering with pug
  // res.render('add-product', {
  //   pageTitle: 'Add Product',
  //   path: '/admin/add-product',
  // });
  // * rendering with handlebars
  res.render('add-product', {
    pageTitle: 'Add Product',
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
  });
});

adminRoutes.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});
