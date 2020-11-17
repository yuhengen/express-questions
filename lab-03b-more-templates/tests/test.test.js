const request = require("supertest");
try {
  app = require("../app_solution");
} catch (e) {
  app = require("../app_solution");
}
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("lab-03b", () => {
  it("should be able to load in styles.css /", async () => {
    const fs = require("fs");
    const path = require("path");
    let cssExists = fs.existsSync(path.join(__dirname, "../public/styles.css"));
    expect(cssExists).toBe(true);
  });
  it("should display apple.jpg for /welcome/1", async () => {
    let res = await request(app).get("/welcome/1");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector("img").src).toEqual("/apple.jpg");
  });

  it("should display banana.jpg for /welcome/2", async () => {
    let res = await request(app).get("/welcome/2");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector("img").src).toEqual("/banana.jpg");
  });

  it("should display cherry.jpg for /welcome/3", async () => {
    let res = await request(app).get("/welcome/3");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector("img").src).toEqual("/cherry.jpg");
  });

  it("should display meatball.jpg for /welcome/4", async () => {
    let res = await request(app).get("/welcome/4");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector("img").src).toEqual("/meatball.jpg");
  });

  it("should have the image files in the /public folder", async () => {
    const fs = require("fs");
    const path = require("path");
    let appleExists = fs.existsSync(
      path.join(__dirname, "../public/apple.jpg")
    );
    let bananaExists = fs.existsSync(
      path.join(__dirname, "../public/banana.jpg")
    );
    let cherryExists = fs.existsSync(
      path.join(__dirname, "../public/cherry.jpg")
    );
    let meatballExists = fs.existsSync(
      path.join(__dirname, "../public/meatball.jpg")
    );
    expect(appleExists).toBe(true);
    expect(bananaExists).toBe(true);
    expect(cherryExists).toBe(true);
    expect(meatballExists).toBe(true);
  });

  it("should use {{#eq}} to switch the images in welcome/:image_no", async () => {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/welcome.hbs")
    );
    expect(contents).not.toBe(null);
    expect(contents.includes("{{#eq")).toBe(true);
  });

  it('should display a list of todos at /todos', async()=>{
    let res = await request(app).get("/todos");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelectorAll("li").length).toEqual(3);
    expect(document.querySelectorAll("li")[0].innerHTML).toEqual("Wash the toilet");
    expect(document.querySelectorAll("li")[1].innerHTML).toEqual("Clean the room");
    expect(document.querySelectorAll("li")[2].innerHTML).toEqual("Buy biscuit");
  })
});
