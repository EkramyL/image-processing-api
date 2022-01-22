import supertest from "supertest";
import app from "../index";
<<<<<<< HEAD
import resizeimage from "../utility/resizeimage";
||||||| c6c0a5e
import resizeImage from "../utility/resizeImage";
=======
import resizedimage from "../utility/resizedimage";
>>>>>>> 77db97a7273c3875265c40b117047826bfc49f98
import fs from "fs";
import path from "path";
import validateUrl from "../utility/validateUrl";
const request = supertest(app);

describe("Test endpoint responses", () => {
  it("gets the api endpoint", async (done) => {
    const res = await request.get("/api/images");
    expect(res.status).toBe(200);
    done();
  });
});

describe("Testing the resizeimage function", async () => {
<<<<<<< HEAD
  await resizeimage("encenadaport", 500, 500);
});

it("an image by the name of encenadaport_500_500.jpg should be in image", () => {
  const imageThumbPath = path.resolve(
    __dirname,
    `../../imagesThumb/encenadaport_500_500.jpg`
  );
  const resizedImgExists = fs.existsSync(imageThumbPath);
  expect(resizedImgExists).toBeTrue();
});

describe("Testing the validateUrl", async () => {
  await validateUrl("encenadaport", 500, 500);
||||||| c6c0a5e
  await resizeImage("encenadaport", 500, 500);
=======
  await resizedimage("encenadaport", 500, 500);
>>>>>>> 77db97a7273c3875265c40b117047826bfc49f98
});

it("an image by the name of encenadaport_500_500.jpg should be in image", () => {
  const imageThumbPath = path.resolve(
    __dirname,
    `../../imagesThumb/encenadaport_500_500.jpg`
  );
  const resizedImgExists = fs.existsSync(imageThumbPath);
  expect(resizedImgExists).toBeTrue();
});
