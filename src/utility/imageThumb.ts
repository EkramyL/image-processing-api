import expess from "express";
import fs from "fs";
import path from "path";

const imageThumb = (
  req: expess.Request,
  res: expess.Response,
  next: expess.NextFunction
): void => {
  const { imageName, width, height } = res.locals;
  const imageThumbName = `${imageName}_${width}_${height}.jpg`;
  const imageThumbPath = path.resolve(
    __dirname,
    `../../imagesThumb/${imageName}_${width}_${height}.jpg`
  );
  if (fs.existsSync(imageThumbPath)) {
    res.send(`<img src="/imagesThumb/${imageThumbName}" />`);
  } else {
    next();
  }
};

export default imageThumb;
