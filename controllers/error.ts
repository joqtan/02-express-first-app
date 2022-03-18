import { Controller } from '../types/controllerTypes';

export const get404: Controller = (req, res) => {
  res.status(400).render('404', { pageTitle: '404 Not Found', path: null });
};
