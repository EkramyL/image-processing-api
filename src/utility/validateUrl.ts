import express from "express";
import imageExist from "./imageExsit";

const validateUrl = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const filename = req.query.filename as unknown as string;
  const width = req.query.width as unknown as string;
  const height = req.query.height as unknown as string;
  const widthNum = Number(width);
  const heightNum = Number(height);
  if (!imageExist(filename)) res.send("Image is not exist");
  else if (isNaN(widthNum) || isNaN(heightNum))
    res.send("Please provide valid input width and height");
  else {
    res.locals.imageName = filename;
    res.locals.width = widthNum;
    res.locals.height = heightNum;
    next();
  }
};

export default validateUrl;
