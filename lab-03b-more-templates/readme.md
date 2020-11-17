# Lab 03b - More templates

## Instructions

1. **Duplicate** the `app_template.js` file and **rename** it as `app.js`. Use this as the base of your answer.

2. Take note that there is a `styles.css` and four image files in the `resources` folder.

3. Create a route named `/welcome/:image_no`. `:image_no` can be 1, 2, 3 or 4. Name your view file `welcome.hbs`
   and make sure it is in the `\views` folder.
   * If `image_no` is `1`, display `apple.jpg`
   * If `image_no` is `2`, display `banana.jpg`
   * If `image_no` is `3`, display `cherry.jpg`
   * If `image_no` is `4`, display `meatball.jpg`

4. Create a route named `/todos` and your own view file to go with it. Add the following array to the view function
   of the route:

   ```
   const todos = [
       'Wash the toilet',
       'Clean the room',
       'Buy biscuit'
   ]
    ```

    Pass the array to the `hbs` file for the route, and render each of to-do in
    an unordered list (that is using `<ul></ul>`)


