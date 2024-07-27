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