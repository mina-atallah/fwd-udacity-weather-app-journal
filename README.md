# FWD - Udacity Front End Nanodegree
-Scholarship Offered by Ministry of Communications and Information Technology of Egypt managed by Udacity And ITIDA: Information Technology Industry Development Agency

# fwd-udacity-weather-app-journal
It's an asynchronous Web App that uses Web API and user's response to dynamically update the User-Interface

## Technologies
- HTML
- CSS
- JavaScript
- Node JS

## Planing
1. Setting up the development environment by installing Node, Installing the packages Express, Body-Parser and Cors and include them in server.js file
  - Create a server running on the port of your choosing
  - Add a console.log() to the server callback function, and test that your server is running using Node in the terminal to run the file server.js
2. Adding a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.
  - The POST route should anticipate receiving three pieces of data from the request body
    1. temperature
    2. date
    3. user response
3. Acquiring API credentials from OpenWeatherMap website. Using credentials and the base url to create global variables at the top of app.js code.
   - Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
   - Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
   - Inside that callback function call your async GET request with the parameters:
     - base url
     - user entered zip code (see input in html with id zip)
     - personal API key
4. After successfully retrieving of the weather data, will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to the app.
  - Will need to write another async function to make this POST request.
  - The function should receive a path and a data object.
  - The data object should include
    - temperature
    - date
    - user response
5. Finally, chain another Promise that updates the UI dynamically, Writing another async function that is called after the completed POST request. This function should retrieve data from our app, selecting the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:
   - Temperature
   - Date
   - User Input (Response)




