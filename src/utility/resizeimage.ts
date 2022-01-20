import path from "path";
import sharp from "sharp";

const resizeImage = async (
  imageName: string,
  width: number,
  height: number
): Promise<boolean> => {
  const imagePath = path.resolve(__dirname, `../../images/${imageName}.jpg`);
  const imageThumbPath = path.resolve(
    __dirname,
    `../../imagesThumb/${imageName}_${width}_${height}.jpg`
  );

  try {
    await sharp(imagePath).resize({ width, height }).toFile(imageThumbPath);
    return true;
  } catch {
    return false;
  }
};

export default resizeImage;
