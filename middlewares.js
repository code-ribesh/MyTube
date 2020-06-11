import routes from './routes';

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'MyTube';
  res.locals.routes = routes;
  next();
};
