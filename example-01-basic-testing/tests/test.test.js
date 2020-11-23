const request = require("supertest");
const app = require("../app");

describe("01-basic-express", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  }),
    it("should be able to get hello world", async () => {
      let res = await request(app).get("/");
      expect(res.statusCode).toEqual(200);
      expect(res.text).toEqual(expect.stringMatching(/Hello from Express/));
    });
});
