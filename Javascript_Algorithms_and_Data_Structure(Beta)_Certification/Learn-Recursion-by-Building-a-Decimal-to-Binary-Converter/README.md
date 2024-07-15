# Learn Recursion by Building a Decimal to Binary Converter
Recursion is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve.

In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.

# Step 1
In this project, you'll build a decimal and binary converter and learn about both number systems. You'll also learn about recursion by using it to perform the conversions.

All of the HTML and CSS for this project has been provided for you.

When you're ready to get started, use the .getElementById() method to get the input element with the id "number-input", and store it in a variable called numberInput. Use the same method to get the button element with the id "convert-btn" and store it in a variable called convertBtn, and the output element with the id "result" and store it in a variable called result.

NOTE: This project will only convert positive numbers into binary.

# Step 2

Now you'll do some setup to check the value in the number input element whenever the user clicks the Convert button.

First, create an empty function called checkUserInput.

# Step 3

A good way to test that everything is working is to log the value attribute of numberInput to the console. As a reminder, you can access the value attribute of an element by using dot or bracket notation.

Within the checkUserInput function, use console.log() to log the value of numberInput to the console.

# Step 4

Now that your checkUserInput() function is set up for testing, you can use an event listener to call the function when users click the Convert button.

Chain the .addEventListener() method to convertBtn. The event listener should listen for click events and take a reference to the checkUserInput function as a callback. Remember that function references are not called with parentheses.

Once that's done, whenever you click the Convert button, the value of the number input should be logged to the console.

# Step 5

Your Convert button should be working now. But it could get tiring for users to enter in a number, then click that button each time they want to convert from decimal to binary. It would be much more convenient to perform the conversion when the Enter or Return key is pressed.

The keydown event fires every time a user presses a key on their keyboard, and is a good way to add more interactivity to input elements.

Chain .addEventListener() to numberInput. The event listener should listen for keydown events and take an empty arrow function as a callback.

# Step 6

Whenever an event listener is triggered by an event, an event object is created automatically. You don't always need to use this object, like with your click handler above, but it can be useful to access information about the event that was triggered.

First, pass e as a parameter to your callback function. Remember that e is a common parameter name for the event object. Next, log e to the console in the body of your callback function.

# Step 7

If you open your browser's console and type in the number input, you'll see event objects logged to the browser. And if you take a closer look at one of those event objects, you'll see helpful properties like type and target.

Since you want to perform an action when the Enter key is pressed, the most helpful property is key, which tells you the string value of the key that was pressed.

Remove the console.log() statement from the callback function and add an if statement that checks if e.key is equal to the string "Enter". Leave the body of your if statement empty for now.

Note: Since the Enter and Return keys have similar functions, they both have the same string value of "Enter".

# Step 8
Next, within the body of the if statement, call the checkUserInput() function. After this, if you enter numbers into the number input and press the Enter / Return key, you should see numbers logged to the console.

# Step 9
Now that your Convert button and number input are listening for clicks and Enter key presses, it's time to complete the checkUserInput() function.

It would be helpful to alert users if they don't enter a value into the number input, or the number they enter is invalid. While the input type="number" element makes validation easier by only allowing numbers and some special characters, remember that all values you get from HTML elements are actually strings. Also, if the number input is empty, the value property will be an empty string.

Inside your checkUserInput function, use an if statement to check if the value of numberInput is equal to an empty string. Leave the body of the if statement empty for now.

# Step 10
In an earlier project you learned about truthy and falsy values, which are values that evaluate to true or false. In JavaScript, some common falsy values you'll see are null, undefined, the number 0, and empty strings.

Rather than check if a value is equal to a falsy value, you can use the logical NOT operator (!) to check if the value itself is falsy. For example:

Example Code
```
const num = 0;

console.log(num === 0); // true
console.log(!num); // true
```
Update the condition in your if statement to use the logical NOT operator to check if numberInput.value is falsy.

# Step 11
Because the input type="number" element allows special characters like ., +, and e, users can input floats like 2.2, equations like 2e+3, or even just e, which you don't want to allow.

A good way to check and normalize numbers in JavaScript is to use the built-in parseInt() function, which converts a string into an integer or whole number. parseInt() takes at least one argument, a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number. For example:

Example Code
```
parseInt(2.2); // 2
parseInt("2e+3"); // 2
parseInt("e") // NaN
```
Add a logical OR operator (||) after the first condition in your if statement. Then, pass the value of numberInput into the parseInt() function as the second condition of your if statement.

# Step 12
Next, you need to check if the value returned by the parseInt() function is a number or not.

To do that, you can use the isNaN() function. This function takes in a string or number as an argument, and returns true if it evaluates to NaN. For example:

Example Code
```
isNaN("test"); // true
isNaN(2); // false
isNaN("3.5"); // false
```
Update the second condition in your if statement to use the isNaN() function to check if the value returned by parseInt() is NaN.

Also,as we mentioned in step 1 that we are considering only positive numbers, we should add a third condition in if statement to check whether the number is less than 0 (i.e negative numbers)

Example Code
`6 < 0; // false
-1 < 0; // true
-8 < 0; // true
0 < 0; //false`

# Step 13
Now you can alert the user if they don't enter a number, or the number is invalid before you attempt to convert it into binary.

In the body of the if statement, use the alert() method to display the text "Please provide a decimal number greater than or equal to 0".

Note that alert() is a method on the window object in the browser, so you can use either window.alert() or alert().

# Step 14
After alerting the user if the number input is empty or the value is not a number, you can use the return keyword to break out of this function early. This will prevent future code in this function from running.

Add the return keyword after alert().

# Step 15
Now you'll start building the function to actually do the decimal to binary conversion.

Create a function called decimalToBinary with input as a parameter. Leave the body of the function empty for now.

# Step 16
Within your checkUserInput function, remove the console.log() statement. Then, call the decimalToBinary function and pass in the value of numberInput as an argument. Also, make sure to use the parseInt() function to convert the input into a number.

# Step 17
Finally, you should clear the number input by setting its value to an empty string. Then later when you convert several numbers in a row, you won't have to delete the previous number before entering the next one.

Set the value property of numberInput to an empty string.