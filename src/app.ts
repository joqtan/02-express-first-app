import express from 'express';
import { shopRoutes } from './routes/shop';
import { adminRoutes } from './routes/admin';
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
