# Lab 03a Templates

## Instructions

1. Create your own `app.js` for this question

2. **Duplicate** a copy of `app_template.js` and **rename** it as `app.js`

3. **Duplicate** `index.hbst` and rename the duplicate to `index.hbs`

4. Answer the following questions

5. Test with `npm test lab-03a-templates`

## Questions

1. Add the code to **setup** the `hbs` for Express properly. See **Lab 3 Part A** and follow it. Perform any steps that
   are missing. If you have setup `hbs` properly, you should be able to visit the `/` route and see `Welcome to my Website` wrapped in a `<h3>`.

2. Add a new route `/about-us` that will render a new `hbs` file named `about-us.hbs`. Include the following HTML in the template file.

   ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>About Us!</h1>
        <div>
            We are a one-stop provider for all services related to building your own ant colony!
        </div>
    </body>
   </html>
   ```

3. Create a new route named `multiply`, that has two route parmeters, `left` and `right`. Display the multiplication of `left` and `right` wrapped within a `<h3>` that says
   print out `<value of left> x <value of right> = <result>`. For example, if we enter the following URL: `/multiply/3/4`, we should see:

   ```
   <h3>3 x 4 = 12</h3>
   ```

   Create your own `.hbs` file for this question. Name this `hbs` file `results.hbs`

4. Place into the `static` folder the image `dog.jpg` (which you can find in the `resources` folder). Add in the necesary folders such
   and hbs file such that the `/gallery` route will display the `dog.jpg` in an `<img>` element.