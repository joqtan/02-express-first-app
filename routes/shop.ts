import express from 'express';
import { getProducts } from '../controllers/products';

export const shopRoutes = express.Router();

shopRoutes.get('/', getProducts);
