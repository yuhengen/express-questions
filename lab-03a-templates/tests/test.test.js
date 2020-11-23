const request = require("supertest");
try {
  app = require("../app_solution");
} catch (e) {
  app = require("../app");
}
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("lab-03a", () => {  

  it("should be able to get '<h3>Welcome to my Website</h3>' from /", async () => {
    let res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector('h3').innerHTML).toEqual("Welcome to my Website!");
  });
  it("should be able load 'about-us.hbs'", async () => {
    let res = await request(app).get("/about-us");
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector('h1').innerHTML.trim()).toEqual("About Us!");
    expect(document.querySelector('div').innerHTML.trim()).toEqual("We are a one-stop provider for all services related to building your own ant colony!");
  });
  it("should be able display multiplication result as <h3>5 x 6 = 30</h3> from /multiply/5/6", async () => {
    let res = await request(app).get("/multiply/5/6");
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector('h3').innerHTML.trim()).toEqual("5 x 6 = 30");    
  });
  it("should be able display multiplication result as <h3>10 x -2 = -20</h3> from /multiply/10/-2", async () => {
    let res = await request(app).get("/multiply/10/-2");
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector('h3').innerHTML.trim()).toEqual("10 x -2 = -20");    
  });
  it("should display dog.jpg in /gallery", async ()=>{
    const fs = require('fs');
    const path = require('path');
    let res = await request(app).get("/gallery");
    let document = new JSDOM(res.text).window.document;
    expect(document.querySelector('img').src.trim()).toEqual("dog.jpg");    
    let dogExists = fs.existsSync(path.join(__dirname, '../public/dog.jpg'));
    expect(dogExists).toBe(true);
  })
 
});
