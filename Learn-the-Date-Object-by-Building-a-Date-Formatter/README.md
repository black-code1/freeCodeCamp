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

# Step 4
The Date object has a number of methods that allow you to get the date and time in different formats.

One of those is the .getDate() method, which returns a number between 1 and 31 that represents the day of the month for that date. For example:

Example Code
`const date = new Date();
const dayOfTheMonth = date.getDate();
console.log(dayOfTheMonth); // 20`
Using const, create a variable named day and assign it the day of the month from date with the .getDate() method.

# Step 5
The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.

Using const, create a variable named month and assign it the month from date with the .getMonth() method.

Remember to add 1 to the number returned by .getMonth().

# Step 6
The .getFullYear() method returns a number which represents the year for the provided date.

Using const, create a variable named year and assign it the year from date with the .getFullYear() method.

# Step 7
The .getHours() method returns a number between 0 and 23. This represents the hour for the provided date, where 0 is midnight and 23 is 11 p.m.

Create a const variable named hours and assign it the hour from date with the .getHours() method.

# Step 8
The .getMinutes() method returns a number between 0 and 59 which represents the minutes for the provided date.

Create a const variable named minutes and assign it the minutes from date with the .getMinutes() method.

# Step 9
Next, create a const variable named formattedDate and assign it empty template literals.

# Step 10
Inside the template literal, add an embedded expression that contains the day variable.

# Step 11
After the day variable, add a dash (-) followed by another embedded expression that contains the month variable.

# Step 12
After the month variable, add a dash followed by another embedded expression that contains the year variable.

# Step 13
To see the results of the formattedDate variable, add a console.log() statement and pass in the formattedDate variable as an argument.

Open up the console and you should see the date printed out.