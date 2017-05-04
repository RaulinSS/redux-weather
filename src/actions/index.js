import axios from 'axios';

const API_KEY = 'bc7440a69696fc67214827e74c9b3ab5';
const ROOT_URL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    /*
    const request = fetch(url,{
        method: "GET"
    });*/
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER, //keep the action type consist between action creators and reducers
        payload: request
    }
}