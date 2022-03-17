import express from 'express';
import { getAddProduct, postAddProduct } from '../controllers/products';

export const adminRoutes = express.Router();

adminRoutes.get('/add-product', getAddProduct);

adminRoutes.post('/add-product', postAddProduct);
