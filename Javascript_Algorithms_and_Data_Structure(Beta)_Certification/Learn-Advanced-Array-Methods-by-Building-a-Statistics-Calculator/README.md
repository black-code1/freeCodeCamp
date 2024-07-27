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

# Step 4
The value of an input element is always a string, even if the input type is number. You need to convert this array of strings into an array of numbers. To do this, you can use the .map() method.

Create a numbers variable and assign it the value of array.map(). Remember that .map() creates a new array, instead of mutating the original array.

# Step 5
The .map() method takes a callback function as its first argument. This callback function takes a few arguments, but the first one is the current element being processed. Here is an example:

Example Code
```
array.map(el => {

})
```
The callback function needs to return a value. In this case, you want to return the value of each element converted to a number. You can do this by using the Number() constructor, passing the element as an argument.

Add a callback function to your .map() method that converts each element to a number.

# Step 6
A user could put any text they want into the input box. You want to make sure that you are only working with numbers. The Number() constructor will return NaN (which stands for "not a number") if the value passed to it cannot be converted to a number.

You need to filter these values out – thankfully, arrays have a method specifically for this. The .filter() method will allow you to filter elements out of an array, creating a new array in the process.

Declare a filtered variable and assign numbers.filter() to it.

# Step 7
Much like the .map() method, the .filter() method takes a callback function. The callback function takes the current element as its first argument.

Example Code
```
array.filter(el => {

})
```
The callback function needs to return a Boolean value, which indicates whether the element should be included in the new array. In this case, you want to return true if the element is not NaN (not a number).

However, you cannot check for equality here, because NaN is not equal to itself. Instead, you can use the isNaN() method, which returns true if the argument is NaN.

Add a callback function to your .filter() method that returns true if the element is not NaN.

# Step 8
Array methods can often be chained together to perform multiple operations at once. As an example:

Example Code
`array.map().filter();`
The .map() method is called on the array, and then the .filter() method is called on the result of the .map() method. This is called method chaining.

Following that example, remove your filtered variable, and chain your .filter() call to your .map() call above. Do not remove either of the callback functions.

# Step 9
That is as far as you can get with the calculate function for now. It is time to write your mean logic.

Create an empty function called getMean. It should take a single parameter array.

# Step 10
The mean is the average value of all numbers in a list. The first step in calculating the mean is to take the sum of all numbers in the list. Arrays have another method, called .reduce(), which is perfect for this situation. The .reduce() method takes an array and applies a callback function to condense the array into a single value.

Declare a sum variable and assign array.reduce() to it.

# Step 11
Like the other methods, .reduce() takes a callback. This callback, however, takes at least two parameters. The first is the accumulator, and the second is the current element in the array. The return value for the callback becomes the value of the accumulator on the next iteration.

Example Code
```
array.reduce((acc, el) => {

});
```
For your sum variable, pass a callback to .reduce() that takes the accumulator and the current element as parameters. The callback should return the sum of the accumulator and the current element.

# Step 12
The .reduce() method takes a second argument that is used as the initial value of the accumulator. Without a second argument, the .reduce() method uses the first element of the array as the accumulator, which can lead to unexpected results.

To be safe, it's best to set an initial value. Here is an example of setting the initial value to an empty string:

Example Code
`array.reduce((acc, el) => acc + el.toLowerCase(), "");`
Set the initial value of the accumulator to 0.

# Step 13
The next step in calculating the mean is to divide the sum of numbers by the count of numbers in the list.

Declare a mean variable and assign it the value of sum divided by the length of array.

# Step 14
Finally, you need to return the value of mean.

# Step 15
You can actually clean this logic up a bit. Using the implicit return of an arrow function, you can directly return the value of the .reduce() method divided by the length of the array, without having to assign any variables.

Update your getMean function as described above.

# Step 16
Now you need to use your new getMean function. In your calculate function, declare a mean variable and assign it the value of getMean(numbers).