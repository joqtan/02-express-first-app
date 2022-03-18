import { Product } from '../models/product';
import { Controller } from '../types/controllerTypes';

export const getAddProduct: Controller = (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

export const postAddProduct: Controller = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

export const getProducts: Controller = (req, res) => {
  const products = Product.fetchAll();
  res.render('shop', {
    products,
    pageTitle: 'Shop',
    path: '/',
  });
};
