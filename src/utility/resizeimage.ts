import express from "express";
import path from "path";
import sharp from "sharp";

const imagesFolder: string = path.resolve(__dirname, "../../images");
const imagesThumbFolder: string = path.resolve(__dirname, "../../imagesThumb");

const resize = async (
  width: number,
  height: number,
  filename: string
): Promise<void> => {
  const imagePath = path.join(imagesFolder, `${filename}.jpg`);
  const imageThumbPath = path.join(
    imagesThumbFolder,
    `${filename}_${width}_${height}.jpg`
  );
  try {
    await sharp(imagePath)
      .resize(Number(width), Number(height))
      .toFile(imageThumbPath);
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

export default resize;
