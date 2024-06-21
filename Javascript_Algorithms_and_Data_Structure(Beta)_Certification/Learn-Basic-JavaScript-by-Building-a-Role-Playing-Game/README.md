# Learn Basic JavaScript by Building a Role Playing Game

## Step 1
To get started, create your standard HTML boilerplate with a DOCTYPE, html, head, and body, then add a meta tag for the charset. Add a title element and use the text RPG - Dragon Repeller for it. Include a link tag for your stylesheet to link the styles.css file.

Finally, create a div element with id set to game within your body.

## Step 2
Now you can start writing your JavaScript. Begin by creating a script element. This element is used to load JavaScript into your HTML file.

## step 3
Add a console.log("Hello World"); line between your script tags. Then click the "Console" button to open the console. You should see the text "Hello World".

## Step 4
Remove your console.log("Hello World"); line. Then give your now empty script element a src attribute set to ./script.js.

## Step 5
Add your console.log("Hello World"); line to this file, and see it appear in your console.

## Step 6
Use the let keyword to declare a variable called xp and assign it the value of 0, a number.

## Step 7
Initialize another variable called health with a value of 100, and a variable called gold with a value of 50.

## Step 8
Create another variable called currentWeaponIndex and set it to 0.

## Step 9
Declare a variable called fighting but do not initialize it with a value.

## Step 10
Declare two more variables named monsterHealth and inventory.

For your inventory variable, assign it the value of an array containing the string "stick".

## Step 11
Create four div elements within your #game element. Give them the following respective id values, in order: stats, controls, monsterStats, and text.

## Step 12
Create three span elements within your #stats element. Give each of them the class stat. Then give the first one the text XP: 0, the second one the text Health: 100, and the third one the text Gold: 50.

## Step 13
Wrap the numbers 0, 100, and 50 in span elements, and wrap those new span elements in strong elements. Then give your new span elements id values of xpText, healthText, and goldText, respectively.

## Step 14
For your #controls element, create three button elements. The first should have the id set to button1, and the text Go to store. The second should have the id set to button2, and the text Go to cave. The third should have the id set to button3, and the text Fight dragon.

## Step 15
JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the document object, which represents your entire HTML document.

One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector

Create a button1 variable and use querySelector() to assign it your element with the id of button1. Remember that CSS id selectors are prefixed with a #.

## Step 16
We have run into a slight problem. You are trying to query your page for a button element, but your script tag is in the head of your HTML. This means your code runs before the browser has finished reading the HTML, and your document.querySelector() will not see the button - because the browser hasn't processed it yet.

To fix this, move your script element out of the head element, and place it at the end of your body element (just before the closing </body> tag.)

## Step 17
button1 is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.

Change your button1 variable to be declared with the const keyword.

## Step 18
Use querySelector() to get the other two button elements using their ids: button2 and button3. Store them in variables called button2 and button3. Remember to use const.

## Step 19
Similar to your #stats element, your #monsterStats element needs two span elements. Give them the class stat and give the first element the text Monster Name: and the second the text Health: . After the text in each, add a strong element with an empty nested span element. Give the first inner span element an id of monsterName and the second inner span element an id of monsterHealth.

## Step 20
Give your #text element the following text:

```Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.```

## Step 21
Now we need some quick styling. Start by giving the body a background-color set to #0a0a23.

## Step 22
Give the #text element a background-color of #0a0a23, a color of #ffffff, and 10px of padding on all sides.

## Step 23
Give your #game a maximum width of 500px and a maximum height of 400px. Set the background-color to #ffffff and the color to #ffffff.

Use margins to center it by setting the top margin to 30px, bottom margin to 0px, and the left and right margin to auto.

Finally, give it 10px of padding on all four sides.

## Step 24
Using a selector list (selector1, selector2) give both your #controls and #stats elements a border of 1px solid #0a0a23, a #0a0a23 text color, and 5px of padding.

## Step 25
Give your #monsterStats element the same border and padding as your #stats element. Set its color to #ffffff and give it a #c70d0d background.

## Step 26
For now, hide your #monsterStats element with the display property. Do not change any of the other styling.

## Step 27
Next, give your .stat elements a padding-right of 10px.

## Step 28
Finally, you will need to add some styles for your buttons. Start by setting the cursor property to pointer. Then set the text color to #0a0a23 and the background-color to #feac32.

Then set the background-image property to linear-gradient(#fecc4c, #ffac33). Lastly, set the border to 3px solid #feac32.