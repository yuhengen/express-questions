const request = require("supertest");
try {
  app = require("../app_solution");
} catch (e) {
  app = require("../app_solution");
}
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("lab 5a question 1", () => {
  it("send yes back if both passwords are the same", async () => {
    const res = await request(app).post("/").send({
      password1: "the quick brown fox sells seashells at the seashore",
      password2: "the quick brown fox sells seashells at the seashore",
    });
    expect(res.status).toBe(200);
    expect(res.text).toBe("yes");
  });

  it("send no back if both passwords are different", async () => {
    const res = await request(app).post("/").send({
      password1: "the quick brown fox sells seashells at the seashore",
      password2: "jack and jill rolled down the hill",
    });
    expect(res.status).toBe(200);
    expect(res.text).toBe("no");
  });
});
