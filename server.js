// an empty JS object acting as an endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// setting up the server
const port = 8000;

// spinning up the server
const server = app.listen(port, listening);
// Callback to debug
function listening() {
  console.log("server is running");
  console.log(`running on localhost: ${port}`);
}


// GET Request to send the data to the app
app.get('/all', function (req, res) {
  res.send(projectData);
});

// POST Request
app.post('/data', addData);

function addData(req, res) {

  // projectData.date = req.body.date;
  // projectData.temperature = req.body.temperature;
  // projectData.userResponse = req.body.userResponse;

  projectData = {
    date: req.body.date,
    temperature: req.body.temperature,
    city: req.body.city,
    userResponse: req.body.userResponse
  };

  // testing
  console.log(projectData);

  res.send(projectData);

};