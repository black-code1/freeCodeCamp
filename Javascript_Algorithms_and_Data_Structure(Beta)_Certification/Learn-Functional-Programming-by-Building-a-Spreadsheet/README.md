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

# Step 14
Now call the .forEach() method of your letters array, and pass your createLabel function reference as the callback.

You should see some letters appear across the top of your spreadsheet.

# Step 15
Remember that range() returns an array, so you can chain array methods directly to the function call.

Call range() with 1 and 99 as the arguments, and chain the .forEach() method. Pass the .forEach() method an empty callback which takes number as the parameter.

# Step 16
In your callback, you will need to make two function calls. Start by calling createLabel() and pass number as the argument. You should see some numbers appear in your spreadsheet.

Then call the .forEach() method on your letters array. Pass an empty callback function which takes a letter parameter.

# Step 17
Now in your nested .forEach() call, declare an input variable. Use the .createElement() method of the document object to create an input element. Set the type attribute to text and the id attribute to letter + number.

# Step 18
In earlier projects you learned about the setAttribute method. Another way to update an attribute in JavaScript is to use the following syntax:

Example Code
`el.attribute = value;`
The property names for hyphenated HTML attribute values, such as aria-label, follow camel case, becoming ariaLabel.

Example Code
`el.ariaLabel = "Aria Label Value";`
Set the aria-label attribute for the input element to the same value as the id attribute.

# Step 19
Append the input element to your container element as a child.

You should now be able to see the cells of your spreadsheet.

# Step 20
Most spreadsheet programs include built-in functions for calculation.

Declare a sum function that takes a nums parameter, which will be an array of numbers. It should return the result of calling reduce on the array to sum all of the numbers.

# Step 21
Declare an isEven function, which takes a num parameter and returns true if the number is even, and false otherwise. Use the modulo operator % to determine if a number is even or odd.

# Step 22
Declare an average function which takes an array of numbers as the nums parameter. It should return the average of all the numbers in the array.

The average can be calculated by dividing the sum of all the numbers in the array by the length of the array. Remember that you have a sum function you can use.

# Step 23
Your next function will calculate the median value of an array of numbers. Start by declaring a median arrow function that takes a nums parameter.

In the function, declare a sorted variable and assign it the value of sorting a copy of the nums array.

You should use the slice() method for creating a shallow copy of the array.

# Step 24
Now declare a length variable and assign it the length of your sorted array, and a middle variable that has the value of the length divided by 2, subtracted by 1.

# Step 25
Using ternary syntax, check if length is even using your isEven function. If it is, return the average of the number at the middle index and the number after that. If it's odd, return the number at the middle index – you'll need to round the middle value up.

# Step 26
Object properties consist of key/value pairs. You can use shorthand property names when declaring an object literal. When using the shorthand property name syntax, the name of the variable becomes the property key and its value the property value.

The following example declares a user object with the properties userId, firstName, and loggedIn.

Example Code
```
const userId = 1;
const firstName = "John";
const loggedIn = true;

const user = {
userId,
firstName,
loggedIn,
};

console.log(user); // { userId: 1, firstName: 'John', loggedIn: true }
```
To keep track of all of your spreadsheet's functions, declare a spreadsheetFunctions object. Using the shorthand notation syntax, set sum, average, and median as properties on the spreadsheetFunctions object.

# Step 27
Now you can start using your spreadsheet functions. Begin by declaring an update arrow function. It should take an event parameter.

# Step 28
In your window.onload function, you need to tell your input elements to call the update function when the value changes. You can do this by directly setting the onchange property.

Set the onchange property to be a reference to your update function.

# Step 29
Since your update event is running as a change event listener, the event parameter will be a change event.

The target property of the change event represents the element that changed. Assign the target property to a new variable called element.

# Step 30
Because the change event is triggering on an input element, the element will have a value property that represents the current value of the input.

Assign the value property of element to a new variable called value, and use .replace() to remove all whitespace.