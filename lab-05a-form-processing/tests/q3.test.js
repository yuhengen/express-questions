const request = require("supertest");
try {
  app = require("../app_solution");
} catch (e) {
  app = require("../app_solution");
}
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("lab 5a q3b - check if form is displayed properly", () => {
  beforeEach(async () => {
    res = await request(app).get("/selection");
    expect(res.statusCode).toEqual(200);
    document = new JSDOM(res.text).window.document;
  });

  it("should have method POST for form", async () => {
    const form = document.querySelector("form");
    expect(form.method.toLowerCase()).toBe("post");
  });

  it("should have a submit button", async () => {
    const submit = document.querySelector('input[type="submit"]');
    expect(submit).not.toBe(null);
  });
});

describe("lab 5a question 3b", () => {
  it("send back 7 if checked 6, -10, 7, 4", async () => {
    // get the names

    const res = await request(app)
      .post("/selection")
      .send({
        'num':['6', '-10', '7', '4' ]
      });
    expect(res.status).toBe(200);
    expect(res.text).toBe("7");
  });
it("send back 6 if checked 6", async () => {
    // get the names

    const res = await request(app)
      .post("/selection")
      .send({
        'num':'6'
      });
    expect(res.status).toBe(200);
    expect(res.text).toBe("6");
  });
  it("send back n/a if no checkboxes checked", async () => {
    // get the names

    const res = await request(app)
      .post("/selection")
      .send({       
      });
    expect(res.status).toBe(200);
    expect(res.text).toBe("n/a");
  });

});
