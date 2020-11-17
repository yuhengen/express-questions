const request = require("supertest");
try {
  app = require("../app_solution");
} catch (e) {
  app = require("../app");
}

describe("lab-02a", () => {
  it("should be able to get '<h1>brandedGoldenRetriever</h1>' from /header/brandedGoldenRetriever", async () => {
    let res = await request(app).get("/header/brandedGoldenRetriever");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("<h1>brandedGoldenRetriever</h1>");
  });
  it("should be able to get '<h1>silverliningsinacloud</h1>' from /header/silverliningsinacloud", async () => {
    let res = await request(app).get("/header/silverliningsinacloud");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("<h1>silverliningsinacloud</h1>");
  });
  it("should get 11 from /add/6/5", async () => {
    let res = await request(app).get("/add/6/5");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("11");
  });
  it("should get 11 from /add/7/4", async () => {
    let res = await request(app).get("/add/7/4");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("11");
  });
  it("should get 10 from /add/20/-10", async () => {
    let res = await request(app).get("/add/20/-10");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("10");
  });
  it("should get abc from /shorten/abc", async()=>{
    let res = await request(app).get("/shorten/abc");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("abc");
  });
  it("should get 12345678... from /shorten/12345678901", async()=>{
    let res = await request(app).get("/shorten/12345678901");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("123456789...");
  })
 it("should get abcdefghijl... from /shorten/abcdefghijkl", async()=>{
    let res = await request(app).get("/shorten/abcdefghijkl");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("abcdefghi...");
  })
});
