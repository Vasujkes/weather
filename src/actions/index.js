import axios from "axios";
import * as types from "./types";

const API_KEY = "5fe54d9685bf951863b35fc169ea60a4";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/group?id=1496153,524901,703448,2643743&units=metric&appid=${API_KEY}`;
const SEARCH_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

function fetchWeatherStart() {
  const action = { type: types.FETCH_WEATHER_START };
  return action;
}

function fetchWeatherSuccess(data) {
  const action = { type: types.FETCH_WEATHER_SUCCESS, payload: data };
  return action;
}

function fetchWeatherFail(error) {
  const action = { type: types.FETCH_WEATHER_FAIL, payload: error };
  return action;
}

function fetchCurrentStart() {
  const action = { type: types.FETCH_CURRENT_START };
  return action;
}

function fetchCurrentSuccess(data) {
  const action = { type: types.FETCH_CURRENT_SUCCESS, payload: data };
  return action;
}

function fetchCurrentFail(error) {
  const action = { type: types.FETCH_CURRENT_FAIL, payload: error };
  return action;
}


export function fetchWeather(city) {
  const result = axios({
    url: `${ROOT_URL}`,
    method: "get",
  });
  return function (dispatch) {
    dispatch(fetchWeatherStart());
    return result
      .then(({ data }) => {
        dispatch(fetchWeatherSuccess(data.list));

        return data.list;
      })
      .catch((error) => {
        dispatch(fetchWeatherFail(error));
        return error;
      });
  };
}

export function fetchCurrent(city) {
  const result = axios({
    url: `${SEARCH_URL}&q=${city}`,
    method: "get",
  });
  return function (dispatch) {
    dispatch(fetchCurrentStart());
    return result
      .then(({ data }) => {
        dispatch(fetchCurrentSuccess(data.list));

        return data.list;
      })
      .catch((error) => {
        dispatch(fetchCurrentFail(error));
        return error;
      });
  };
}

