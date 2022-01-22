import express from "express";
import imageThumb from "../../utility/imageThumb";
import validateUrl from "../../utility/validateUrl";
import resizedimage from "../../utility/resizedimage";

const images = express.Router();

images.get(
  "/",
  validateUrl,
  imageThumb,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { imageName, width, height } = res.locals;
    const resized = await resizedimage(imageName, width, height);
    if (resized) {
      res.redirect(
        `/api/images?filename=${imageName}&width=${width}&height=${height}`
      );
    } else res.send("Image processing failed");
  }
);

export default images;
