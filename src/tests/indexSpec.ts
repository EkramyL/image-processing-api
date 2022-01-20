import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("test endpoint", () => {
  it("should resposne is ok for get /api/images", async (done) => {
    const res = await request.get("/api/images");
    expect(res.status).toBe(200);
    done();
  });
});
