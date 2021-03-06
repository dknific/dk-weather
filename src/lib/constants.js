const openWeatherURL = 'https://api.openweathermap.org/data/2.5/weather';
const oneCallURL = 'https://api.openweathermap.org/data/2.5/onecall';
const appid = process.env.REACT_APP_API_KEY;

export function isObjectEmpty(obj = {}) {
  return Object.entries(obj).length === 0;
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

function hasLetter(myString) {
  return /[a-zA-Z]/g.test(myString);
}

function mixesNumsAndLetters(myString) {
  return hasNumber(myString) && hasLetter(myString);
}

export async function getWeatherCoords(userIn, countryCode) {
  let isNumeric = hasNumber(userIn);
  let fetchURL = `${openWeatherURL}?`;
  let location;

  if (isNumeric) {
    location = `${userIn},${countryCode}`;
    fetchURL += `zip=${location}&appid=${appid}`;
  } else {
    location = `${encodeURI(userIn)},,${countryCode}`;
    fetchURL += `q=${location}&appid=${appid}`;
  }

  const response = await fetch(fetchURL);
  return response.json();
}

export async function getWeatherForecast(coords) {
  let fetchURL = `${oneCallURL}?lat=${coords.lat}&lon=${coords.lon}&appid=${appid}&units=imperial`;
  const response = await fetch(fetchURL);
  return response.json();
}

export function generateDatesArray() {
  let datesArray = [];
  const date = new Date();
  const dotw = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];

  {/* Construct today's date as a phrase */}
  const dateWords = date.toString().split(' ');
  const today = `${dateWords[0]}, ${dateWords[1]} ${dateWords[2]}`;
  datesArray.push(today);

  {/* Fill array with remaining days */}
  let startIndex;
  let overflownIndex;
  for (let i = 0; i < 7; i++) {
    if (dotw[i] === dateWords[0]) { startIndex = i }
  }
  for (let j = startIndex + 1; j < startIndex + 7; j++) {
    if (j >= 7) {
      overflownIndex = j - 7;
    } else { overflownIndex = j}
    datesArray.push(dotw[overflownIndex])
  }

  return datesArray;
}
