# Learn Regular Expressions by Building a Spam Filter
Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are powerful, but can be difficult to understand because they use so many special characters.

In this spam filter project, you'll learn about capture groups, positive lookaheads, negative lookaheads, and other techniques to match any text you want.

# Step 1
To begin the project, use the .getElementById() method to retrieve the #message-input, #result, and #check-message-btn elements from the HTML document, and assign them to the variables messageInput, result, and checkMessageButton, respectively.

# Step 2
Attach an event listener to your checkMessageButton, listening for the click event. Give it an empty callback function.

# Step 3
If the messageInput is empty, display an alert to the user with the message Please enter a message..

Then, exit the function execution.

# Step 4
Create an isSpam function using the const keyword and arrow syntax. The function should take a single parameter msg and implicitly return false for now.

# Step 5
Back in your event listener, you need to update the text of the result element. You can use a ternary operator to achieve this task.

Here is an example of assigning the result of a ternary operator to an element's text content:

Example Code
`el.textContent = condition ? "Use this text if the condition is true" : "Use this text if the condition is false";`
After the if statement, use a ternary operator to check the truthiness of calling isSpam() with messageInput.value as the argument. If true, set the textContent property on the result element to Oh no! This looks like a spam message.. Otherwise, set it to This message does not seem to contain any spam.

Then set the messageInput element's value property to an empty string.

# Step 6
Your first regular expression will be used to catch help requests. Declare a helpRegex variable, and assign it a regular expression that matches the string please help.

As a refresher, here is a regular expression to match the string hello world:

Example Code
`const regex = /hello world/;`

# Step 7
Regular expressions can take flags to modify their behavior. For instance, the i flag can be used to make the expression ignore case, causing it to match hello, HELLO, and Hello for the expression /hello/.

Flags are added after the trailing slash. Add the i flag to your helpRegex.

# Step 8
Strings have a .match() method, which accepts a regular expression as an argument and determines if the string matches that expression.

Update your isSpam() function to implicitly return the result of calling the .match() method on msg, passing helpRegex as the argument.

Then, try entering some messages on your page and see the result.

# Step 9
Instead of using the .match() method, you can use the .test() method of a regular expression to test if a string matches the pattern. Unlike .match(), .test() returns a boolean value indicating whether or not the string matches the pattern.

Update your isSpam() function to use the .test() method of helpRegex to test if msg is a match.

Then, try entering some messages on your page and see the result.

# Step 10
The alternate sequence | can be used to match either the text on the left or the text on the right of the |. For example, the regular expression /yes|no/ will match either yes or no.

Update your helpRegex to match either please help or assist me.