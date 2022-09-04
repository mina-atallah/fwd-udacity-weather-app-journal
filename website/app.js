
/* Start Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let today = d.toDateString();

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=2a7e11c3e2db0768ba0d97c56bff6e7a&units=imperial';

const btn = document.getElementById('generate');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const city = document.getElementById('city');

/* End Global variables */


// Event listener to add function to existing HTML DOM element
btn.addEventListener('click', peformAction);


/* Function called by event listener */
function peformAction(e) {
  const zipCode = document.getElementById('zip').value;
  const userFeelings = document.getElementById('feelings').value;

  // testing
  // console.log(userFeelings);

  getWeather(baseURL, zipCode, apiKey)

    .then(function (data) {
      // Add data to POST request
      postData('/data', { temperature: data.main.temp, date: today, city: data.name, userResponse: userFeelings })

        .then(function () {

          updateUI();
        });
    });

}


// async function that uses fetch() to make a GET Request to OpenWeatherMap API
const getWeather = async (baseURL, code, key) => {

  const getRes = await fetch(baseURL + code + key);

  console.log(getRes);

  try {
    const data = await getRes.json();

    console.log(data);

    return data;

  } catch (error) {
    console.log('ERROR', error);
  }
};



// async post request function
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {

    const newData = await response.json();

    // for debugging
    console.log(newData);

    return newData;

  } catch (error) {
    console.log('ERROR', error);
  }

};




/* Async Function to GET Project Data
    & updating the UI
*/
const updateUI = async () => {

  const req = await fetch('/all');

  try {

    const allData = await req.json();

    date.innerHTML = `Today's Date is ${allData.date}`;
    temp.innerHTML = `Temperature: ${allData.temperature}`;
    content.innerHTML = `And I'm feeling ${allData.userResponse}`;
    city.innerHTML = `City: ${allData.city}`;

    // date.innerHTML = "Today's Date is: " + allData.date;
    // temp.innerHTML = 'Temperature: ' + allData.temperature;
    // content.innerHTML = "i'm feeling " + allData.userResponse;

  }
  catch (error) {
    console.log('error', error);
  }
};


