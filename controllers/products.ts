import { Request, Response } from 'express';

export const products: { title: string }[] = [];

type Controller = {
  (req: Request, res: Response): void;
};

export const getAddProduct: Controller = (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

export const postAddProduct: Controller = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

export const getProducts: Controller = (req, res) => {
  res.render('shop', {
    products,
    pageTitle: 'Shop',
    path: '/',
  });
};
