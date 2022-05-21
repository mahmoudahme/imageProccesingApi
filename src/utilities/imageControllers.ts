import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

async function resize(imageName: string,width: number,height: number): Promise<string> {
  const imagePath = path.join(__dirname,'..','..','images','full',`${imageName}.jpg`);
  const thumbPath = path.join(__dirname,'..','..','images','output',`${imageName}-${width}x${height}.jpg`);

  try {
    await fsPromises.access(thumbPath);
  } catch (error) {
    await sharp(imagePath).resize(width, height).toFile(thumbPath);
  }
  return thumbPath;
}

export default { resize };