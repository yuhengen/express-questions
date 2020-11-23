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
  it("should display <h1>Ideas become reality here</h1> in <div.container></div.container>", async () => {
    let res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector("div.container h1").innerHTML.trim()).toEqual("Ideas become reality here");
  });

  it("should display Welcome in <title></title>,", async () => {
    let res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector("title").innerHTML.trim()).toEqual("Welcome");
  });

  it("should display the footer,", async () => {
    let res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector("#footer .alert").innerHTML.trim()).toEqual("Call us for more information");
  });

  it("should be nothing inside <div.container/> in base.hbs", async () => {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/layouts/base.hbs")
    );
    expect(contents).not.toBe(null);
    let document = new JSDOM(contents).window.document;
    expect(document.querySelector("div.container h1")).toEqual(null);
  });

  it("should be nothing inside <title/> in base.hbs", async () => {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/layouts/base.hbs")
    );
    expect(contents).not.toBe(null);
    let document = new JSDOM(contents).window.document;
    expect(document.querySelector("title").innerHTML).toEqual(`{{#block 'title'}}{{/block}}`);
  });

it("should be nothing inside #footer in base.hbs", async () => {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/layouts/base.hbs")
    );
    expect(contents).not.toBe(null);
    let document = new JSDOM(contents).window.document;
    expect(document.querySelector("#footer .alert")).toEqual(null);
  });

  it("should ensure that welcome.hbs extends base.hbs", async()=> {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/welcome.hbs")
    );
    expect(contents.includes("{{#extends 'base'}}")).toBe(true)
  })
  
   it("should ensure that index.hbs adds into a block in base.hbs", async()=> {
    const fs = require("fs");
    const path = require("path");
    var contents = fs.readFileSync(
      path.join(__dirname, "../views/welcome.hbs")
    );
    expect(contents.includes("{{#block")).toBe(true)
  })

});
