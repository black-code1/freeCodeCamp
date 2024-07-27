# Learn Basic Algorithmic Thinking by Building a Number Sorter
In computer science, there are fundamental sorting algorithms that all developers should learn. In this number sorter project, you'll learn how to implement and visualize different sorting algorithms like bubble sort, selection sort, and insertion sort – all with JavaScript.

This project will help you understand the fundamental concepts behind these algorithms, and how you can apply them to sort numerical data in web applications.

# Step 1
In this project, you will be building a number sorter. The HTML and CSS have been provided for you. Feel free to explore them.

When you are ready, declare a sortButton variable and assign it the value of .getElementById() with the argument "sort".

# Step 2
To prepare your project's logic, use const and arrow syntax to declare a sortInputArray function. It should take a single event parameter.

# Step 3
You will be using this as an event listener for the sortButton. Because buttons associated with a form element submit by default, you need to prevent that behavior. Call event.preventDefault() in your function to do this.

# Step 4
To test your code as you write it, mount an event listener to your sortButton element. It should listen for the "click" event, and take sortInputArray as the callback.

# Step 5
Back in your sortInputArray function, you need to get the values from your select elements. Since they all have the class values-dropdown, you can query them all at once.

Use document.getElementsByClassName() to get all the elements with this class by passing in the argument "values-dropdown". Assign that to an inputValues variable with const.

# Step 6
Remember that .getElementsByClassName() returns an array-like object. You can use the spread operator to convert it into an array.

Convert the document.getElementsByClassName() call to an array with the spread operator and assign it to a variable called inputValues.

# Step 7
You need to get the values from your select elements. These values will currently be strings and you will convert them into numbers.

Use the map function to iterate over the array. Pass a callback function to map that takes a dropdown parameter and returns dropdown.value.

# Step 8
You should use console.log() to print out the result of inputValues. Write the code for this inside the sortInputArray function.

To see the result for the inputValues array, log out the inputValues array to the console. Then click on the sort button and open up the console. You should see an array of strings like this:

Example Code
`[ '8', '2', '4', '1', '3' ]`
Before going further, make sure you observe the data type of the printed result in the console.

In the next step, you will convert those strings into numbers.

# Step 9
Update your .map() callback to call the Number() function. Pass dropdown.value to that function call.

Open the Console tab to see that your inputValues is an array of numbers now.

# Step 10
Now that you have confirmed the data type of the inputValues elements, remove your console.log() call.

# Step 11
You need a function to update the display with the sorted numbers. Start by using arrow syntax to declare an updateUI function that takes a single array parameter.

Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array. Here is an example of a function that has a fallback value:

Example Code
`const myFunction = (string = "") => {

}`

# Step 12
To perform an action on each element in the array, use the method that is meant for iterating over arrays.

Use the forEach() method, and pass it an empty callback which takes num and i as the parameters.

# Step 13
Create a variable named outputValueNode and set its value to the result of calling the document.getElementById() method. Use template literal syntax to pass in the output-value-${i} string to .getElementById().

# Step 14
Set the innerText property of outputValueNode to num.