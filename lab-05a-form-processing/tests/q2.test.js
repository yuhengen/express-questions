const request = require("supertest");
try {
  app = require("../app_solution");
} catch (e) {
  app = require("../app_solution");
}
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("lab 5 q2a - check if form is displayed properly", () => {
  beforeEach(async () => {
    res = await request(app).get("/calculate");
    expect(res.statusCode).toEqual(200);
    document = new JSDOM(res.text).window.document;
  });

  it("should have method POST for form", async () => {
    const form = document.querySelector("form");
    expect(form.method.toLowerCase()).toBe("post");
  });

  it("should have a name for the first text input", async () => {
    const tf = document.querySelector('input[type="text"]');
    expect(tf.name).not.toBe(null);
  });

  it("should have a name for the second text input", async () => {
    const tf = document.querySelectorAll('input[type="text"]')[1];
    expect(tf.name).not.toBe(null);
  });

  it("should have a name for all the radio buttons", async () => {
    const radios = document.querySelectorAll('input[type="radio"]');
    for (let r of radios) {
      expect(r.name).not.toBe(null);
    }
  });
  it("should have the same name for all the radio buttons", async () => {
    const radios = document.querySelectorAll('input[type="radio"]');
    expect(radios[0].name).toBe(radios[1].name);
    expect(radios[1].name).toBe(radios[2].name);
  });

  it("should have a submit button", async () => {
    const submit = document.querySelector('input[type="submit"]');
    expect(submit).not.toBe(null);
  });
});

describe("lab 5b question 2b", () => {
  it("send back 10 if sent 6, 4 and plus", async () => {
    // get the names
    let n1 = document.querySelectorAll('input[type="text"]')[0].name;
    let n2 = document.querySelectorAll('input[type="text"]')[1].name;
    let opsName = document.querySelector('input[type="radio"]').name;

    const res = await request(app)
      .post("/calculate")
      .send({
        [n1]: "6",
        [n2]: "4",
        [opsName]: "plus",
      });
    expect(res.status).toBe(200);
    expect(res.text).toBe("10");
  });
  it("send 5 if sent 10, 5, subtract", async () => {
    // get the names
    let n1 = document.querySelectorAll('input[type="text"]')[0].name;
    let n2 = document.querySelectorAll('input[type="text"]')[1].name;
    let opsName = document.querySelector('input[type="radio"]').name;

    const res = await request(app)
      .post("/calculate")
      .send({
        [n1]: "10",
        [n2]: "5",
        [opsName]: "subtract",
      });
    expect(res.status).toBe(200);
    expect(res.text).toBe("5");
  });
  it("send 77 if sent 7, 11, multiply", async () => {
    // get the names
    let n1 = document.querySelectorAll('input[type="text"]')[0].name;
    let n2 = document.querySelectorAll('input[type="text"]')[1].name;
    let opsName = document.querySelector('input[type="radio"]').name;

    const res = await request(app)
      .post("/calculate")
      .send({
        [n1]: "7",
        [n2]: "11",
        [opsName]: "multiply",
      });
    expect(res.status).toBe(200);
    expect(res.text).toBe("77");
  });
});
