const request = require("supertest");
let app;
try {
     app = require("../app_solution");
} catch (e){
    app = require("../app");
}

describe("lab-01-hello-from-express", () => {
  it("should be able to get 'hello everyone!' from /", async () => {
    let res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(expect.stringMatching(/Hello everyone!/));
  });

  it("should be able to say 'So long and thank you for all the fish' from /goodbye", async () => {
    let res = await request(app).get("/goodbye");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(
      expect.stringMatching(/So long and thank you for all the fish!/)
    );
  });
  it("should be able to say 'Corwin of amber' from /correct_me", async () => {
    let res = await request(app).get("/correct_me");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(
      expect.stringMatching(/Corwin of amber/)
    );
  });
it("should be able say 'the quick brown fox jumps over the lazy dog' from /faulty", async () => {
    let res = await request(app).get("/faulty");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(
      expect.stringMatching(/the quick brown fox jumps over the lazy dog/)
    );
  });
});
