import express from "express";
import resize from "./resizeimage";

const validateUrl = (
  req: express.Request,
  res: express.Response,
  next: Function
): unknown => {
  if (req.query.filename && req.query.width && req.query.height) {
    resize(
      parseInt(req.query.width as string),
      parseInt(req.query.height as string),
      req.query.filename as string
    );
    return next();
  } else {
    return res.status(404).json({
      status: "error",
      error:
        "image not found, please enter a valid image name, width and height",
    });
  }
};
