# Learn localStorage by Building a Todo App
Local storage is a web browser feature that lets web applications store key-value pairs persistently within a user's browser. This allows web apps to save data during one session, then retrieve it in a later page session.

In this TODO application, you'll learn how to handle form inputs, manage local storage, perform CRUD (Create, Read, Update, Delete) operations on tasks, implement event listeners, and toggle UI elements.

# Step 1
In this project, you will learn how localStorage works in JavaScript by building a Todo app. LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.

The HTML and CSS for this project have been provided for you. Take a look at the files to get yourself familiarized with them.

Begin by accessing the task-form, confirm-close-dialog, and open-task-form-btn elements with the getElementById() method. Save them in the variables taskForm, confirmCloseDialog, and openTaskFormBtn.

# Step 2
You need to access more elements with the getElementById() method. This time you need the close-task-form-btn, add-or-update-task-btn, and cancel-btn elements. Save them in the variables closeTaskFormBtn, addOrUpdateTaskBtn, and cancelBtn.

# Step 3
Next, access the discard-btn, tasks-container, and title-input elements using the getElementById() method. Save them in variables named discardBtn, tasksContainer, and titleInput, respectively.

# Step 4
The last set of elements you need to get from the HTML file are the date-input and description-input elements. Save them in the variables dateInput and descriptionInput respectively.

# Step 5
Create a taskData constant and set it to an empty array. This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to localStorage.

Use let to create a currentTask variable and set it to an empty object. This variable will be used to track the state when editing and discarding tasks.

# Step 6
Now, you will work on opening and closing the form modal.

In earlier projects, you learned how to add and remove classes from an element with el.classList.add() and el.classList.remove(). Another method to use with the classList property is the toggle method.

The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.

Example Code
`element.classList.toggle("class-to-toggle");`
Add an event listener to the openTaskFormBtn element and pass in a click event for the first argument and an empty callback function for the second argument.

For the callback function, use the classList.toggle() method to toggle the hidden class on the taskForm element.

Now you can click on the "Add new Task" button and see the form modal.

# Step 7
The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.

Example Code
`dialogElement.showModal();`
Add an event listener to the closeTaskFormBtn variable and pass in a click event for the first argument and a callback function for the second argument.

For the callback function, call the showModal() method on the confirmCloseDialog element. This will display a modal with the Discard and Cancel buttons.

# Step 8
If the user clicks the Cancel button, you want to cancel the process and close the modal so the user can continue editing. The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.

Example Code
`dialogElement.close();`
Add an event listener to the cancelBtn element and pass in a click event for the first argument and a callback function for the second argument.

For the callback function, call the close() method on the confirmCloseDialog element.

# Step 9
If the user clicks the Discard button, you want to close the modal showing the Cancel and Discard buttons, then hide the form modal.

Add a click event listener to discardBtn, then use the close() method on the confirmCloseDialog variable. Also, use classList to toggle the class hidden on taskForm so the form modal will close too.

# Step 10
Now that you've worked on opening and closing the modal, it's time to get the values from the input fields, save them into the taskData array, and display them on the page.

To start, add a submit event listener to your taskForm element and pass in e as the parameter of your arrow function. Inside the curly braces, use the preventDefault() method to stop the browser from refreshing the page after submitting the form.

# Step 11
You will need to determine whether the task being added to the taskData array already exists or not. If the task does not exist, you will add it to the array. If it does exist, you will update it. To accomplish this, you can use the findIndex() method.

The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing function. If no such element is found, the method returns -1.

Here's an example:

Example Code
```
const numbers = [3, 1, 5, 6];
const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);

console.log(firstNumLargerThanThree); // prints index 2
```
Use const to declare a variable called dataArrIndex and assign it the value of taskData.findIndex(). For the findIndex() method, pass in an arrow function with item as the parameter.

Within the arrow function, check if the id property of item is strictly equal to the id property of currentTask.

# Step 12
When a user creates a task, it should be saved in an object.

Create a const variable called taskObj and assign it the value of an empty object.

Then below that, add a console statement that logs the value of taskObj to the console.

Open up the console to see the empty object.

# Step 13
Inside your taskObj, add an id property name. For the value use the value of the titleInput.

To see the new result, click on the "Add New Task" button. Then add a title and click on the "Add Task" button. Open up the console to see the result.

# Step 14
The user should be able to input a title with upper and lowercase letters. But for the id, the value should be all lowercase.

Update your titleInput.value to be all lowercase. You can use the toLowerCase() method to do this.

Example Code
`str.toLowerCase();`
To see the new result, click on the "Add New Task" button. Then add a title of WALK DOG and click on the "Add Task" button. Open up the console to see the result of "walk dog".

# Step 15
Right now, your id value is a lowercase string. But the final result should be a hyphenated string.

Start by chaining the split method to the titleInput.value to split the string into an array of words. For the separator, use a space character(" ").

To see the new result, click on the "Add New Task" button. Then add a title of WALK DOG and click on the "Add Task" button. Open up the console to see the result of ['walk', 'dog'].