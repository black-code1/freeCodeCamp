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

## Step 29
Just like you did with the buttons, create variables for the following ids and use querySelector() to give them the element as a value:

text, xpText, healthText, goldText, monsterStats, and monsterName.

Remember to declare these with the const keyword, and name the variables to match the ids.

## Step 30
Finally, use querySelector() to get the #monsterHealth element. Because you have already declared a monsterHealth variable earlier, you need to use a different variable name for this element.

Declare a new variable with the const keyword and name it monsterHealthText.

## Step 31
Create an empty function named goStore.

# Step 32
For now, make your goStore function output the message "Going to store." to the console.

# Step 33
Now create a goCave function that prints "Going to cave." to the console.

# Step 34
Now create a fightDragon function that prints "Fighting dragon." to the console.

# Step 35
In the previous project, you learned how to work with single line and multi-line comments like this:

# Step 36
Use dot notation to set the onclick property of your button1 to the function reference of goStore. Note that button1 is already declared, so you don't need to use let or const.

# Step 37
Using the same syntax, set the onclick properties of button2 and button3 to goCave and fightDragon respectively.

Once you have done that, open your console and try clicking the buttons on your project.

# Step 38
When a player clicks your Go to store button, you want to change the buttons and text. Remove the code inside the goStore function and add a line that updates the text of button1 to say "Buy 10 health (10 gold)".

# Step 39
Now, add a line that updates the text of button2 to say "Buy weapon (30 gold)" and update the text of button3 to say "Go to town square".

# Step 40
In your goStore() function, update the onclick property for each button to run buyHealth, buyWeapon, and goTown, respectively.

# Step 41
Now you need to modify your display text. Change the innerText property of the text to be "You enter the store.".

# Step 42
Create three new empty functions called buyHealth, buyWeapon, and goTown.

# Step 43
Move your goTown function above your goStore function. Then copy and paste the contents of the goStore function into the goTown function.

# Step 44
In your goTown function, change your button elements' innerText properties to be "Go to store", "Go to cave", and "Fight dragon". Update your onclick properties to be goStore, goCave, and fightDragon, respectively.

Finally, update innerText property of your text to be "You are in the town square. You see a sign that says Store.".

# Step 45
Wrap the text Store in double quotes within your text.innerText line.

# Step 46
Create an empty update function that takes a parameter called location.

# Step 47
In your role playing game, you will be able to visit different locations like the store, the cave, and the town square. You will need to create a data structure that will hold the different locations.

Use const to create a variable called locations and assign it an empty array.

# Step 48
Objects are non primitive data types that store key-value pairs. Non primitive data types are mutable data types that are not undefined, null, boolean, number, string, or symbol. Mutable means that the data can be changed after it is created.

For now, create a const variable called cat and assign it an empty object {}.

Below that cat variable, add a console.log(cat) statement to see the object in the console.

# Step 49
Inside your cat object, add a new property. The key should be name and the value should be the string "Whiskers".

# Step 50
Add a new property with a key of "Number of legs" and value of 4 to the cat object.

# Step 51
Update your console statement to access the name property of the cat object using dot notation.

# Step 52
Update your console statement to use bracket notation to access the property "Number of legs" of the cat object.

# Step 53
Later on in the curriculum, you will dive deeper into objects. But for now, it is time to apply what you have learned to your role playing game.

Start by deleting your cat object and console statement.

# Step 54
Your locations array will hold different locations like the store, the cave, and the town square. Each location will be represented as an object.

Inside your locations array, add an object. Inside that object add a key called name with a value of "town square".

# Step 55
Just like array values, object properties are separated by a comma. Add a comma after your name property and add a button text property with the value of an empty array.

# Step 56
Give your empty button text array three string elements. Use the three strings being assigned to the button innerText properties in the goTown function. Remember that array values are separated by commas.

# Step 57
Create another property in your object called button functions. Give this property an array containing the three functions assigned to the onclick properties in the goTown function. Remember that these functions are variables, not strings, and should not be wrapped in quotes.

# Step 58
Add one final property to the object named text. Give this property the same string value as the one assigned to text.innerText in the goTown function.

# Step 59
Add a second object to your locations array (remember to separate them with a comma). Following the pattern you used in the first object, create the same properties but use the values from the goStore function. Set the name property to store.

# Step 60
Now you can consolidate some of your code. Start by copying the code from inside the goTown function and paste it into your update function. Then, remove all the code from inside the goTown and goStore functions.

# Step 61
Instead of assigning the innerText and onclick properties to specific strings and functions, the update function will use data from the location that is passed into it. First, that data needs to be passed.

Inside the goTown function, call the update function. 

# Step 62
Now it is time to use your update function. Pass in your locations array into the update function call.

You pass arguments by including them within the parentheses of the function call. 

# Step 63
The locations array contains two locations: the "town square" and the "store". Currently you are passing that entire array into the update function.

Pass in only the first element of the locations array by adding [0] at the end of the variable. 

# Step 64
Now your update function needs to use the argument you pass into it.

Inside the update function, change the value of the button1.innerText assignment to be location["button text"]. That way, you use bracket notation to get the "button text" property of the location object passed into the function.

# Step 65
location["button text"] is an array with three elements. Change the button1.innerText assignment to be location["button text"][0] which represents the first element of the array.

# Step 66
Now update button2.innerText and button3.innerText to be assigned the second and third values of the "button text" array, respectively.

# Step 67
Following the same pattern as you did for the button text, update the three buttons' onclick assignments to be the first, second, and third values of the "button functions" array.

# Step 68
Finally, update the text.innerText assignment to equal the text from the location object. However, instead of using bracket notation, use dot notation.

# Step 69
Now update your goStore function to call the update function. Pass the second element of the locations array as your argument.

To make sure your refactoring is correct, try clicking your first button again. You should see the same changes to your webpage that you saw earlier.

# Step 70
Create two more empty functions named fightSlime and fightBeast. These functions will be used in your upcoming cave object.

# Step 71
Add a third object to the locations array. Give it the same properties as the other two objects.

Set name to cave. Set button text to an array with the strings "Fight slime", "Fight fanged beast", and "Go to town square". Set the "button functions" to an array with the variables fightSlime, fightBeast, and goTown. Set the text property to "You enter the cave. You see some monsters.".

# Step 72
Now that you have a "cave" location object, update your goCave function to call update and pass that new "cave" location. Remember that this is the third element in your locations array.

Don't forget to remove your console.log call!

# Step 73
Now that your "store" and "cave" locations are complete, you can code the actions the player takes at those locations. Inside the buyHealth function, set gold equal to gold minus 10.

# Step 74
After the gold is updated, add a line to set health equal to health plus 10.

# Step 75
There is a shorthand way to add or subtract from a variable called compound assignment. For example, changing num = num + 5 to compound assignment would look like num += 5.

Update both lines inside your buyHealth function to use compound assignment.

# Step 76
Now that you are updating the gold and health variables, you need to display those new values on the game screen. You have retrieved the healthText and goldText elements in a prior step.

After your assignment lines, assign the innerText property of goldText to be the variable gold. Use the same pattern to update healthText with the health variable.

You can test this by clicking your "Go to store" button, followed by your "Buy Health" button.

Note: Your answer should only be two lines of code.

# Step 77
Start by placing all of the code in your buyHealth function inside an if statement. For the if statement condition, check if gold is greater than or equal to 10.

# Step 78
Now when a player tries to buy health, it will only work if they have enough money. If they do not, nothing will happen. Add an else statement where you can put code to run if a player does not have enough money.

# Step 79
Inside the else statement, set text.innerText to equal "You do not have enough gold to buy health.".

# Step 80
Use const to create a weapons variable above your locations array. Assign it an empty array.

# Step 81
Just like your locations array, your weapons array will hold objects. Add four objects to the weapons array, each with two properties: name and power. The first should have the name set to "stick" and the power set to 5. The second should be "dagger" and 30. The third, "claw hammer" and 50. The fourth, "sword" and 100.

# Step 82
Inside your buyWeapon function, add an if statement to check if gold is greater than or equal to 30.

# Step 83
Similar to your buyHealth function, set gold equal to 30 less than its current value. Make sure this is inside your if statement.

# Step 84
The value of the currentWeaponIndex variable corresponds to an index in the weapons array. The player starts with a "stick", since currentWeaponIndex starts at 0 and weapons[0] is the "stick" weapon.

In the buyWeapon function, use compound assignment to add 1 to currentWeaponIndex - the user is buying the next weapon in the weapons array.

# Step 85
Change your currentWeaponIndex assignment to use the increment operator.

# Step 86
Now update the goldText element to display the new value of gold, and update the text element to display "You now have a new weapon.".

# Step 87
You should tell the player what weapon they bought. In between the two lines you just wrote, use let to initialize a new variable called newWeapon. Set this to equal weapons.

# Step 88
Use bracket notation to access an object within the weapons array and assign it to your newWeapon variable. Place the variable currentWeaponIndex within the brackets.

When you use a variable in bracket notation, you are accessing the property or index by the value of that variable.

# Step 89
weapons[currentWeaponIndex] is an object. Use dot notation to get the name property of that object.

# Step 90
Update the string "You now have a new weapon." to "You now have a " followed by the name of the new weapon, and remember to end the sentence with a period.

# Step 91
Back at the beginning of this project, you created the inventory array. Add the newWeapon to the end of the inventory array using the push() method.

# Step 92
Up until now, any time text.innerText was updated, the old text was erased. This time, use the += operator to add text to the end of text.innerText.

Add the string " In your inventory you have: " - include the spaces at the beginning and the end.

# Step 93
At the end of the second text.innerText string you just added, use the concatenation operator to add the contents of inventory to the string.

# Step 94
Add an else statement to your buyWeapon function. In that statement, set text.innerText to equal "You do not have enough gold to buy a weapon.".

# Step 95
Once a player has the best weapon, they cannot buy another one. Wrap all of the code in your buyWeapon function inside another if statement. The condition should check if currentWeaponIndex is less than 3 - the index of the last weapon.

# Step 96
Arrays have a length property that returns the number of items in the array. You may want to add new values to the weapons array in the future.

Change your if condition to check if currentWeaponIndex is less than the length of the weapons array. An example of checking the length of an array myArray would look like myArray.length.

# Step 97
Now it is time to test your buyWeapon function. Right now, the gold amount is set to 50. But to properly see the results of your buyWeapon function, the amount should be set to something higher.

Update the gold amount to 250.

NOTE: The HTML has already been updated to reflect this change.

To test your buyWeapon function, open up the console. Then click on the "Go to store" button followed by the "Buy weapon (30 gold)" button four times.

# Step 98
When you were testing your function, you should have seen an error message in the console. This error is due to the condition in the buyWeapon function.

The currentWeaponIndex variable is the index of the weapons array, but array indexing starts at zero. The index of the last element in an array is one less than the length of the array.

Change the if condition to check weapons.length - 1, instead of weapons.length.

Test out your buyWeapon function again to see the error message disappear.

# Step 99
If the player has purchased all of the weapons in the inventory, the player should not be able to purchase any more and a message should be displayed.

Add an else statement for your outer if statement. Inside this new else statement, set text.innerText to "You already have the most powerful weapon!".

Test your buyWeapon function again to make sure the message is displayed when the player has the most powerful weapon.

# Step 100
Now that you are finished testing that portion of the buyWeapon function, you can set your gold variable back to 50.

Note: The HTML has already been updated to reflect the original value of gold.

# Step 101
Once a player has the most powerful weapon, you can give them the ability to sell their old weapons.

In the outer else statement, set button2.innerText to "Sell weapon for 15 gold". Also set button2.onclick to the function name sellWeapon.

# Step 102
Create an empty sellWeapon function.

# Step 103
Players should not be able to sell their only weapon. Inside the sellWeapon function, add an if statement with a condition that checks if the length of the inventory array is greater than 1.

# Step 104
Inside the if statement, set gold equal to 15 more than its current value. Also update goldText.innerText to the new value.

# Step 105
Use the let keyword to create a variable named currentWeapon. Don't assign it a value yet.

# Step 106
In the previous project, you learned how to work with the shift() method to remove the first element from an array like this:

# Step 107
After your currentWeapon, use the concatenation operator to set text.innerText to the string "You sold a ", then currentWeapon, then the string ".".

# Step 108 
Now use the += operator to add the string " In your inventory you have: " and the contents of inventory to the text.innerText. Make sure to include the space at the beginning and end of the " In your inventory you have: " string.

# Step 109
Use an else statement to run when the inventory length is not more than one. Set the text.innerText to say "Don't sell your only weapon!".

# Step 110
Now you can start the code to fight monsters. To keep your code organized, your fightDragon function has been moved for you to be near the other fight functions.

Below your weapons array, define a monsters variable and assign it an array. Set that array to have three objects, each with a name, level, and health properties. The first object's values should be "slime", 2, and 15, in order. The second should be "fanged beast", 8, and 60. The third should be "dragon", 20, and 300.

# Step 111
Fighting each type of monster will use similar logic. Create an empty function called goFight to manage this logic.

# Step 112
In your fightSlime function, set fighting equal to 0 - the index of slime in the monsters array. Remember that you already declared fighting earlier in your code, so you do not need let or const here.

On the next line, call the goFight function.

# Step 113
Following the same pattern as the fightSlime function, use that code in the fightBeast and fightDragon functions. Remember that beast is at index 1 and dragon is at index 2. Also, remove the console.log call from your fightDragon function.

# Step 114
At the end of your code, create two empty functions named attack and dodge.

# Step 115
Add a new object to the end of the locations array, following the same properties as the rest of the objects. Set name to "fight", "button text" to an array with "Attack", "Dodge", and "Run", "button functions" to an array with attack, dodge, and goTown, and text to "You are fighting a monster.".

# Step 116
In the goFight function, call your update function with the fourth object in locations as an argument.

# Step 117
Below your update call, set the monsterHealth to be the health of the current monster. You can get this value by accessing the health property of monsters[fighting] with dot notation.

# Step 118
By default, the HTML element that shows the monster's stats has been hidden with CSS. When the player clicks the "Fight dragon" button, the monster's stats should be displayed. You can accomplish this by using the style and display properties on the monsterStats element.

The style property is used to access the inline style of an element and the display property is used to set the visibility of an element.

Display the monsterStats element by updating the display property of the style property to block.

# Step 119
Now, you will need to update the text for the current monster's name and health.

Start by assigning monsters[fighting].name to the innerText property of monsterName. Then, assign monsterHealth to the innerText property of monsterHealthText.

# Step 120
Now you can build the attack function. First, update the text message to say "The <monster name> attacks.", replacing <monster name> with the name of the monster. Remember you can use the concatenation operator for this.

# Step 121
On a new line, use the addition assignment operator(+=), to add the string " You attack it with your <weapon>." to the text value, replacing <weapon> with the player's current weapon. Additionally, remember that this line of text starts with a space so it will properly display.

# Step 122
Next, set health to equal health minus the monster's level. Remember you can get this from the monsters[fighting].level property.

# Step 123
Set monsterHealth to monsterHealth minus the power of the player's current weapon.

Remember that you can access the power of the player's current weapon using weapons[currentWeaponIndex].power.

# Step 124
The Math object in JavaScript contains static properties and methods for mathematical constants and functions. One of those is Math.random(), which generates a random number from 0 (inclusive) to 1 (exclusive). Another is Math.floor(), which rounds a given number down to the nearest integer.

Using these, you can generate a random number within a range. For example, this generates a random number between 1 and 5: Math.floor(Math.random() * 5) + 1;.

Following this pattern, use the addition operator (+) to add a random number between 1 and the value of xp to your monsterHealth -= weapons[currentWeaponIndex].power.

# Step 125
Update healthText.innerText and monsterHealthText.innerText to equal health and monsterHealth.

# Step 126
Add an if statement to check if health is less than or equal to 0. If it is, call the lose function.

# Step 127
At the end of your if statement, add an else if statement to check if monsterHealth is less than or equal to 0. In your else if, call the defeatMonster function.

# Step 128
At the end of your code, create the defeatMonster and lose functions. Leave them empty for now.

# Step 129
Inside the dodge function, set text.innerText equal to the string "You dodge the attack from the <monster>". Replace <monster> with the name of the monster, using the name property.

# Step 130
In your defeatMonster function, set gold equal to gold plus the monster's level times 6.7. Remember you can get the monster's level by using monsters[fighting].level.

Here is an example of setting num to num plus 5 * 8: num += 5 * 8. Use Math.floor() to round the result down.