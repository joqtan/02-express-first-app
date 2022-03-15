import express from 'express';
import { shopRoutes } from './routes/shop';
import { adminRoutes } from './routes/admin';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(shopRoutes);

app.use(adminRoutes);

app.listen(3000);
