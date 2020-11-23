# Lab 5A - Basic form processing

1. Duplicate the `app_template.js` and rename it as `app.js`.

2. Create your own `views` folder.

3. There is no need for template inheritance for this lab.

## Create the following routes

### /

1. Use the content of `form1.html` as your .hbs file. Add in anything missing to the HTML so that the form can be submitted

2. Add to `app.js` such that the form will be displayed

3. Add to `app.js` such that when the user presses the [Submit] button, Express will send
   back 'yes' if both `<input type='text'>` in the form contains the same content, 'no' if otherwise.

### /calculate

1. Use the content of `form2.html` as your .hbs file. It shows a radio button and two text input.

2. Add missing attributes and/or elements to the HTML form so that Express will be able to process it.

3. Add to `app.js` such that the form will be displayed

4. Add to `app.js` such that when the form is submitted, the two **integer** numbers provided in form will be
   added, subtracted or multipled together, depending on which radio button is selected.

5. **Hint**: `res.send` works best with strings.

### /selection

1. Use the content of `form3.htm` as your .hbs file. It shows a number of checkboxes. Each
   checkbox has a value associated with it.

2. Add missing attributes and/or elements to the HTML form so that Express will be able to express it.

3. Make it such that the form can be displayed

4. Make it such that when the form is submitted, it will display the **largest value of all the selected checkboxes** using a `result.hbs` file,
   in a `<div>` element with the id of `answer`.  Your must answer work for **no** checkboxes selected and
   only **one** checkbox being selected, in addition to **multiple** checkboxes being selected. If no checkbox is selected, send back the string `n/a`
   **Hint:** use `console.log` to check what is sent back for the three possible states of the checkboxes (i.e, many selected vs one selected vs. none selected)

