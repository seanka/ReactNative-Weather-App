import authKey from './authKey';

const {API_KEY} = authKey;
const RAW_URL = 'https://api.openweathermap.org/data/3.0/onecall?';

export async function getWeather({lat, lon}) {
  try {
    const parameters = `lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=minutely&units=metric`;

    const response = await fetch(RAW_URL + parameters);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}
