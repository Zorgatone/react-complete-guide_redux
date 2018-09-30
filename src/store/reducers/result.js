import * as actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: [
          ...state.results,
          {
            id: new Date().getTime() + Math.random(),
            value: action.value
          }
        ]
      });
    case actionTypes.DELETE_RESULT:
      return updateObject(state, {
        results: state.results.filter(result => result.id !== action.value)
      });
    default:
      return state;
  }
};

export default reducer;
