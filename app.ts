import express from 'express';
import { shopRoutes } from './routes/shop.js';
import { adminRoutes } from './routes/admin.js';
// import { engine } from 'express-handlebars';

const app = express();
// * engine registration to handlebars
// app.engine(
//   'hbs',
//   engine({
//     layoutsDir: 'dist/views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs',
//   })
// );
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.get('/*', (req, res) => {
  //* sending statically
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  // * rendering with pug and handlebars
  // res.status(400).render('404', { pageTitle: '404 Not Found' });
  // * rendering with ejs
  res.status(400).render('404', { pageTitle: '404 Not Found', path: null });
});

app.listen(3000);