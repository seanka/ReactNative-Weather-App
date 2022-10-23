const API_KEY = '';
// a33cd9ae08415cccce08f8912a43935e
const RAW_URL = 'https://api.openweathermap.org/data/3.0/onecall?';

export async function getWeather({lat, lon}) {
  const parameters = `lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=minutely&units=metric`;

  const response = await fetch(RAW_URL + parameters);
  const json = await response.json();
  return json;
}
