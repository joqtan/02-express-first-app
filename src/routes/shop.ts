import express from 'express';

export const shopRoutes = express.Router();

shopRoutes.get('/', (req, res) => {
  res.send('<h1>Hello from Express!</h1>');
});
