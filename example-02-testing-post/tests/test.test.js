const request = require("supertest");
const app = require("../app");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let res;
let document;

describe("example-02-testing-get-form: can display the form", () => {
  beforeEach(async () => {
    res = await request(app).get("/form");
    expect(res.statusCode).toEqual(200);
    document = new JSDOM(res.text).window.document;
  });

  it("should be able to display a form", async () => {
    const form = document.querySelector("form");
    expect(form).not.toBe(null);
  });

  it("should have method POST for form", async () => {
    const form = document.querySelector("form");
    expect(form.method.toLowerCase()).toBe("post");
  });

  it("should have num1 for the text input", async () => {
    const num1 = document.querySelector('input[name="num1"]');
    expect(num1).not.toBe(null);
  });

  it("should have num1 for the text input", async () => {
    const num2 = document.querySelector('input[name="num2"]');
    expect(num2).not.toBe(null);
  });

it("should have a submit button", async () => {
    const submit = document.querySelector('input[type="submit"]');
    expect(submit).not.toBe(null);
  });
});

describe("example-02-testing-get-form: can process the form", () => {
  it("should return 6 if given 2 and 4", async () => {
    const res = await request(app).post("/form").send({
      num1: "2",
      num2: "4",
    });
    expect(res.status).toBe(200);
    expect(res.text).toBe("6");
  });
});
