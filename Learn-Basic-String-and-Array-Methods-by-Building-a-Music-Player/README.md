# Introduction
Now let's learn some essential string and array methods like the find(), forEach(), map(), and join(). These methods are crucial for developing dynamic web applications.

In this project, you'll code a basic MP3 player using HTML, CSS, and JavaScript. The project covers fundamental concepts such as handling audio playback, managing a playlist, implementing play, pause, next, previous, and shuffle functionalities. You'll even learn how to dynamically update your user interface based on the current song.

# Step 1
In this project you will learn basic string and array methods by building a music player app. You will be able to play, pause, skip, and shuffle songs.

The HTML and CSS of this project have been provided for you, so you can focus on the JavaScript.

Start by accessing the #playlist-songs, #play, and #pause elements with the getElementById() method. Assign them to variables playlistSongs, playButton and pauseButton respectively.

# Step 2
Access the #next, #previous and #shuffle elements from the HTML file.

Assign them to variables named nextButton, previousButton, and shuffleButton, respectively.

# Step 3
Next, create an array to store all the songs.

Create an empty allSongs array.

# Step 4
Inside the allSongs array, create an object with the following properties and values:

Example Code
```
id: 0,
title: "Scratching The Surface",
artist: "Quincy Larson",
duration: "4:25",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
```

# Step 5
Add a second object with the following keys and values:

Example Code
```
id: 1,
title: "Can't Stay Down",
artist: "Quincy Larson",
duration: "4:15",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
```

# Step 6
Add a third object with the following properties and values:

Example Code
```
id: 2,
title: "Still Learning",
artist: "Quincy Larson",
duration: "3:51",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
```

# Step 7
We've added the rest of the songs to the allSongs array for you.

Next, you'll learn about the Web Audio API and how to use it to play songs. All modern browsers support the Web Audio API, which lets you generate and process audio in web applications.

Use const to create a variable named audio and set it equal to new Audio(). This will create a new HTML5 audio element.