import axios from "axios";

const apiKey = "4736a5f0de940dc3729c1212425f7864";

const getLatLon = async (location) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;
  const response = await axios.get(url);
  const result = [response.data[0].lat, response.data[0].lon];
  return result;
};

const url = async (location) => {
  const latAndLon = await getLatLon(location);
  return `http://api.openweathermap.org/data/2.5/weather?lat=${latAndLon[0]}&lon=${latAndLon[1]}&appid=${apiKey}`;
};

export const fetchWeather = async (location) => {
  const apiUrl = await url(location);
  const response = await axios.post(apiUrl);
  return response.data;
};
