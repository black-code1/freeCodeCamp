# Learn the Date Object by Building a Date Formatter
Working with dates in JavaScript can be challenging. You have to navigate various methods, formats, and time zones. In this project, you'll learn how to work with the JavaScript Date object, including its methods and properties. You'll also learn how to correctly format dates.

This project will cover concepts such as the getDate(), getMonth(), and getFullYear() methods.

# Step 1
In this project, you will learn about the JavaScript Date object by building a date formatter.

All of the HTML and CSS for this project have been provided for you.

Start by getting the #current-date element using the .getElementById() method and assign it to a const variable called currentDateParagraph.

# Step 2
Use the .getElementById() method to get the #date-options element and use const to assign it to a variable named dateOptionsSelectElement.

# Step 3
In JavaScript, there are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.

For example, you can use the Date() constructor with the new operator to create a new Date object that returns a string with the current date and time:

Example Code
```
const currentDate = new Date();
console.log(currentDate);
```
// Output:
// Mon Aug 23 2021 15:31:00 GMT-0400 (Eastern Daylight Time)
Create a new const variable called date and assign it a Date object with new Date().