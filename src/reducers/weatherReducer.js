import * as actions from "../actions/types";

export const initialState = {
  data: [],
  current: [],
  isLoading: false,
  errorMessage: "",
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
        errorMessage: "",
      };
    case actions.FETCH_WEATHER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case actions.FETCH_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "При загрузке произошла ошибка",
      };

    case actions.FETCH_CURRENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        current: [...action.payload],
        errorMessage: "",
      };
    case actions.FETCH_CURRENT_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case actions.FETCH_CURRENT_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "Данные по городу не найдены",
      };
    default:
      return state;
  }
}
