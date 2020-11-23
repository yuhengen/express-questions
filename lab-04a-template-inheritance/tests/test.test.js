const request = require("supertest");
try {
  app = require("../app_solution");
} catch (e) {
  app = require("../app_solution");
}
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("lab-04a", () => {
  it("should have a base.hbs file", async () => {
    const fs = require("fs");
    const path = require("path");
    let baseExists = fs.existsSync(path.join(__dirname, "../views/layouts/base.hbs"));
    expect(baseExists).toBe(true);
  });
  it("should display <h3>Greetings everyone!</h3> in <div.container></div.container>", async () => {
    let res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector("div.container h3").innerHTML).toEqual("Greetings everyone!");
  });

  it("should be nothing inside <div.container/> in base.hbs", async () => {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/layouts/base.hbs")
    );
    expect(contents).not.toBe(null);
    let document = new JSDOM(contents).window.document;
    expect(document.querySelector("div.container h3")).toEqual(null);
  });

  it("should ensure that index.hbs extends base.hbs", async()=> {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/index.hbs")
    );
    expect(contents.includes("{{#extends 'base'}}")).toBe(true)
  })
  
   it("should ensure that index.hbs adds into a block in base.hbs", async()=> {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/index.hbs")
    );
    expect(contents.includes("{{#block")).toBe(true)
  })

});
