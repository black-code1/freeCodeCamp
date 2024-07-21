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