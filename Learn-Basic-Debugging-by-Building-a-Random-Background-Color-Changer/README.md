# Debugging is the process of going through your code, finding any issues, and fixing them.
In this project, you will help CamperBot build a random background color changer and help them find and fix errors.
Debugging is the process of going through your code, finding any issues, and fixing them.

In this project, you will help CamperBot build a random background color changer and help them find and fix errors.

# Step 1
CamperBot is trying to build out a random background color changer. But they keep running into issues and need your help to debug the code.

CamperBot has already added the HTML and CSS for the project. But they are confused as to why none of the styles and content is showing up on the page.

Example Code
`SyntaxError: unknown: Unexpected token, expected ","`
Syntax errors are thrown when the JavaScript engine encounters something it can't interpret. In this case, it looks like CamperBot has syntax errors in the darkColorsArr array.

Fix the syntax errors in the darkColorsArr array and you should see the content and styles show up on the page.

# Step 2
Now, CamperBot is trying to create a function that will return a random index from the darkColorsArr. But they have run into the following error message:

Example Code
`Uncaught ReferenceError: math is not defined`
A ReferenceError is thrown when a non-existent variable is referenced. In this case, it looks like CamperBot is trying to use math but JavaScript doesn't have a math object.

Fix CamperBot's error in the math.random() line and open up the console again.