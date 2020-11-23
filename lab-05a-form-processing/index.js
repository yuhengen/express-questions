/* DON'T MODIFY INDEX.JS */
let app;
try {
  app = require("./app_solution");
} catch (e) {
  app = require("./app_solution");
}

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});