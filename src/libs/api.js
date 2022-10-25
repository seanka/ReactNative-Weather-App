import authKey from './authKey';

const { API_KEY, GOOGLE_KEY } = authKey;
const WEATHER_RAW_URL = 'https://api.openweathermap.org/data/3.0/onecall?';
const GOOGLE_RAW_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

export async function getWeather({ lat, lon }) {
  try {
    const parameters = `lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=minutely&units=metric`;

    const response = await fetch(WEATHER_RAW_URL + parameters);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

export async function getCity({ lat, lon }) {
  try {
    const parameters = `latlng=${lat},${lon}&key=${GOOGLE_KEY}`;

    const response = await fetch(GOOGLE_RAW_URL + parameters);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}
