import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test endpoint responses", () => {
  it("gets the api endpoint", async (done) => {
    const res = await request.get("/api/images");
    expect(res.status).toBe(200);
    done();
  });
});
