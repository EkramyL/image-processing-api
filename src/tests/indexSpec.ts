import supertest from "supertest";
import app from "../index";
import resizedimage from "../utility/resizedimage";

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
  await resizedimage("encenadaport", 500, 500);
});

it("an image by the name of encenadaport_500_500.jpg should be in image", () => {
  const imageThumbPath = path.resolve(
    __dirname,
    `../../imagesThumb/encenadaport_500_500.jpg`
  );
  const resizedImgExists = fs.existsSync(imageThumbPath);
  expect(resizedImgExists).toBeTrue();
});

describe("Testing a valid url", () => {
  it("gets api/images/resize endpoint", async () => {
    const response = await request.get(
      "/api/images?filename=icelandwaterfall&width=300&height=300"
    );
    expect(response.status).toBe(200);
  });
  it("tests resizedimage.ts", async () => {
    const resize = () => resizedimage("icelandwaterfall", 300, 300);
    // expect(resize).not.toThrowError("Error");
    const imageThumbPath = path.resolve(
      __dirname,
      `../../imagesThumb/icelandwaterfall_300_300.jpg`
    );
    resize();
    const resizedImgExists = fs.existsSync(imageThumbPath);
    expect(resizedImgExists).toBeTrue();
  });
});
