import express from 'express';
// import path from 'path';
import { products } from './admin';

export const shopRoutes = express.Router();

shopRoutes.get('/', (req, res) => {
  // * rendering staticaly
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  // * rendering with pug
  // res.render('shop', {
  //   products,
  //   pageTitle: 'Shop',
  //   path: '/'
  // });
  // * rendering with handlebars
  res.render('shop', {
    products,
    pageTitle: 'Shop',
    hasProducts: products.length > 0,
    productCSS: true,
    activeShop: true,
  });
});
