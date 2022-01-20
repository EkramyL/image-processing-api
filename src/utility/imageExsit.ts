import fs from "fs";
import path from "path";

const imageExist = (imageName: string): boolean => {
  const imagePath = path.resolve(__dirname, `../../images/${imageName}.jpg`);
  return fs.existsSync(imagePath);
};

export default imageExist;
