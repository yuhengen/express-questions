# LAB 1B - Writing your own app

## Instructions
There will be no `app_template.js` for you this time, just an `index.js`. Your task is to:

1. Write your **own** `app.js`

2. Add in the routes specified by the questions below

3. Test with `npm test lab-02a-route-parameters`

## Questions

1. Have a route `/header/:title` that displays the parameter `title` within `<h1>` tags.

2. Have a route `/add/:num1/:num2` where both `num1` and `num2` will be assumed to be integers. Send back the sum of `num1` and `num2` as a string. 
   That is `/add/4/5` will send back the result string "9".
   **Hint:** Remember that all route parameters are stored as strings
 
3. Have a route `/shorten` that have a route parameter `text`. Display the text. If it is longer than 10 characters, replace the last three characters with `...`

