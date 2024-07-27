# Learn Advanced Array Methods by Building a Statistics Calculator
As you expand your JavaScript skills, you'll want to get comfortable with array manipulation methods, such as map(), reduce(), and filter().

In this statistics calculator project, you'll gain experience with handling user input, DOM manipulation, and method chaining. You'll get practice by performing statistical calculations like mean, median, mode, variance, and standard deviation.

# Step 1
Statistics is a way of using math to make sense of data. It helps us understand patterns and trends in information, so we can make predictions and decisions based on that information.

In this challenge, you will build a statistics calculator that takes a set of numbers and returns the mean, median, mode, standard deviation, and variance.

The HTML and CSS have been provided for you. Feel free to explore the code – you may notice that the calculate function is called when the form is submitted. When you are ready, declare a calculate variable and assign it an empty function in the script.js file.

# Step 2
To begin, the calculate function needs to find the number that was entered in the #numbers input field. To do this, use a .querySelector to locate the input field and then use the .value property to get the number entered.

Store this in a value variable.

# Step 3
Now that you have the value of the input, you need to split it into an array of numbers. Use the .split() method to do this.

The .split() method takes a string and splits it into an array of strings. You can pass it a string of characters or a RegEx to use as a separator. For example, string.split(",") would split the string at each comma and return an array of strings.

Use the /,\s*/g regex to split the value string by commas. You can tweak it based on the number of spaces separating your values. Store the array in an array variable.