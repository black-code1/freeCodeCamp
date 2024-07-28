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

# Step 6
You will need a function to generate a range of numbers.

Declare an empty range function which takes a start and end parameter. Use the Array() constructor and implicitly return an empty array.

# Step 7
Your array will need to be the size of the range. You can calculate this by finding the difference between end and start, and adding 1 to the result.

Pass this calculation as the argument for your Array() constructor.

# Step 8
The Array() constructor has a .fill() method which can be used to fill an array with a value. You can use this to fill your array with the start value.

Chain the .fill() method to your Array() constructor, and pass it the start value.

# Step 9
Currently your range function returns an array with the correct length, but all of the values are the value of start. To fix this, chain the .map() method to your .fill() method.

Pass the .map() method a callback which takes element and index as parameters and returns the sum of those parameters.

# Step 10
Now that you have a range function, you can use it to create a range of letters as well.

Declare a charRange function using const and arrow syntax. It should take a start and end parameter. The function should implicitly return the result of calling range() with start and end as the arguments.

# Step 11
Your range function expects numbers, but your start and end values will be strings (specifically, they will be single characters such as A).

Convert your start and end values in your range() call to numbers by using the .charCodeAt() method on them, passing the number 0 as the argument to that method.

# Step 12
range() will return an array of numbers, which you need to convert back into characters. Chain the .map() method to your range() call.

Pass a callback function that takes code as the parameter and implicitly returns the value of passing code to the String.fromCharCode() method.

# Step 13
Now that your helper functions are complete, back in your onload event handler you should declare a letters variable. Assign it the result of calling charRange() with the letters A and J as arguments.