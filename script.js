// LIGHTNING EXERCISE
// In your JavaScript file, declare and assign the following variables with information about yourself:
// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// Log each variable to the console.

let firstName = "Vincent";
let lastName = "OLeary";
let age = 25;
let likesTravel = false;

// LIGHTNING EXERCISE
// Favorite Movies
// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.

let movieArray = ["Avengers", "The Crown"]
console.log(movieArray[0])
console.log(movieArray[1])

// All About Me Pt. 2
// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

let vincentObject = {
    firstName: "Vincent",
    lastName: "OLeary",
    age: 21,
    likesToTravel: false,
    favoriteMovies: ["Avengers", "The Crown"],
}


//PRACTICE
// 1. Weather Data
// In your JavaScript file, copy and paste the following array:

var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

// Print the first high temperature to the console.
// Print the last low temperature to the console.

console.log(highTemperatures[0]);
console.log(lowTemperatures[5])

// 2. Weather Object
// In your JavaScript file, create an object that represents the current weather. Your can reuse your data from the first exercise. Your object should have the following properties:
// temperature
// conditions
// Log the current temperature to the console.
// Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")

let currentWeather = {
    temperature: 24,
    conditions: "windy",
}

console.log(currentWeather.temperature)
console.log("It's",currentWeather.temperature,"degrees F and",currentWeather.conditions+".")

// 3. Nested Weather Objects
// Refactor your weather object to include today's high and low temperature and sunrise/ sunset times.
// Log today's high temperature to the console.
// Log today's low temperature to the console.
// Log today's conditions to the console.
// Log today's sunrise time to the console.
// Use string template literals to create a more detailed description of today's weather.

currentWeather = {
    temperature: {
        high: 28,
        low: 12
    },
    conditions: "windy",
    astronomy: {
        sunrise: "7:43 AM",
        sunset: "5:09 PM"
    }
}

console.log(currentWeather.temperature.high)
console.log(currentWeather.temperature.low)
console.log(currentWeather.conditions)
console.log(currentWeather.astronomy.sunrise)
console.log(currentWeather.astronomy.sunset)
console.log("The high today is",currentWeather.temperature.high,"degrees F and its currently",currentWeather.conditions+".")

// 4. Weather Forecast

// 5. Student Grades

// 6. Movie Star

// 7. Dwayne's Hobbies

// CHALLENGE
// Weather Data
