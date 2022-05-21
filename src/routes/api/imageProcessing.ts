import express, { Request, Response } from 'express';
import image from '../../utilities/imageControllers';

const images = express.Router();

images.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query.filename as string | undefined;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename) {
    res.status(400).send('filename is missing');
    return;
  }
  if (!(width > 0)) {
    res.status(400).send('width is missing or not a positive number' );
    return;
  }
  if (!(height > 0)) {
    res.status(400).send('heigth is missing or not a positive number' );
    return;
  }

  try {
    const thumb = await image.resize(filename, width, height);
    res.sendFile(thumb);
  } catch (error) {
    res.status(404).send('image not found');
  }
});

export default images;