import supertest from "supertest";
import app from "../index";
import resizeimage from "../utility/resizeimage";
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
});

it("an image by the name of encenadaport_500_500.jpg should be in image", () => {
  const imageThumbPath = path.resolve(
    __dirname,
    `../../imagesThumb/encenadaport_500_500.jpg`
  );
  const resizedImgExists = fs.existsSync(imageThumbPath);
  expect(resizedImgExists).toBeTrue();
});
