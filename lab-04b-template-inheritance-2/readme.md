# Lab 4B - More template inheritance

1. Duplicate the `app_template.js` and rename it as `app.js`.

2. Use the given `bs4.html`, create a base template. Make it such there are three blocks:

   * Block `content` within the `<div class='container'>`

   * Block `footer` within the `<div class='footer'>`

   * Block `title` within the `<title>` tag.

3. Create the following routes:

   * '/' -  Displays "Welcome" in the `<title>` tag, and `<h1>Ideas become reality here</h1>`
     within the `<div class='container'>`. For the footer, add the following HTML: `<div class='alert alert-success'>Call us for more information</div>`
     **Name your .hbs file `welcome.hbs`**