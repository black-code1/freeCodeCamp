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