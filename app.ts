import express from 'express';
import { shopRoutes } from './routes/shop.js';
import { adminRoutes } from './routes/admin.js';
import { get404 } from './controllers/error.js';
// import { engine } from 'express-handlebars';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.get('/*', get404);

app.listen(3000);
