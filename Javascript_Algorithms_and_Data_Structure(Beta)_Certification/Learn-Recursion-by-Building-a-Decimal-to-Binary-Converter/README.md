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
