# Lab 04a - Template Inheritance Basics

We are going to try our hand at template inheritance. 

1. **Duplicate** the `app_template.js` file and **rename** it as `app.js`. Use this as the base of your answer.

2. Create a `views` folder and place all your `.hbs` view files inside there.

3. Create a base layout named `base.hbs`. Place the content of Bootstrap 4 getting started inside (Refer to the `bs4.html` for the content).
   Add in blocks to `<div.container>` so that other templates can insert content there.

4. Create a new route at the url `\` which uses the view `index.hbs`. **Using** template inheritance, extends `index.hbs` to use `base.hbs`
   and **using blocks**, display `<h3>Greetings everyone!</h3>` in `<div.container>` (that is, the `div` with the `class` of `container`)