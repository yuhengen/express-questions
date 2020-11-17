const request = require("supertest");
try {
     app = require("../app_solution");
} catch (e){
    app = require("../app");
}

describe("lab-01b", () => {
  it("should be able to get 'she sells seashells by the seahore' from /", async () => {
    let res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(expect.stringMatching(/She sells seashells by the seashore/));
  });

it("should be able to get the current date from /date", async () => {
    let res = await request(app).get("/date");
    expect(res.statusCode).toEqual(200);
    let dateString = new Date() + "";
    expect(res.text).toEqual(dateString);
  });


});
