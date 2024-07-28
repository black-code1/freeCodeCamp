# Learn Functional Programming by Building a Spreadsheet

Functional Programming is a popular approach to software development. In Functional Programming, developers organize code into smaller functions, then combine those functions to build complex programs.

In this spreadsheet application project, you'll learn about parsing and evaluating mathematical expressions, implementing spreadsheet functions, handling cell references, and creating interactive web interfaces. You'll learn how to dynamically update the page based on user input.

This project will cover concepts like the map(), find(), and includes() methods and the parseInt() function.

# Step 1
Your project starts with a basic HTML container and some corresponding CSS. Your first task will be to programmatically generate the cells for your spreadsheet.

The global window object represents the browser window (or tab). It has an onload property which allows you to define behavior when the window has loaded the entire page, including stylesheets and scripts.

Start by setting the onload property of window to an arrow function with no parameters. In the function, declare a container variable and assign it the value of getting the element by the id of container.

# Step 2
Functions are ideal for reusable logic. When a function itself needs to reuse logic, you can declare a nested function to handle that logic. Here is an example of a nested function:

Example Code
```
const outer = () => {
const inner = () => {

};
};
```
Declare a nested createLabel function using arrow syntax. It should take a name parameter.

# Step 3
Remember that the document object has a .createElement() method which allows you to dynamically create new HTML elements.

In your createLabel function, declare a label variable and assign it a new div element.

# Step 4
Set the className of the label element to label, and set the textContent to the name parameter.

# Step 5
Finally, use the .appendChild() method to add your label element to the container element.