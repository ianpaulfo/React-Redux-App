
import { FETCH_DATA, UPDATE_PLAYERS, SET_ERROR } from "../actions";

  const initialState = {
    players: [],
    isFetchingData: false,
    error: ""
  };

  export const reducer = (state, initialState, action) => {
    console.log(state);
  };

  export const playersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA:
        return {
          ...state,
          isFetchingData: true,
          players: []
        };
      case UPDATE_PLAYERS:
        return {
          ...state,
          players: action.payload,
          isFetchingData: false
        };
      case SET_ERROR:
        return {
          ...state,
          isFetchingData: false,
          error: action.payload
        };
      default:
        return state;
    }
  };