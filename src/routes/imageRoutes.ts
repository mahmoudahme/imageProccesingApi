import express, { Request, Response } from 'express';
import images from './api/imageProcessing';

const routes = express.Router();

routes.get('/', (_req: Request, res: Response): void => {
  res.send('write the query in URL');
});

routes.use('/images', images);

export default routes;