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