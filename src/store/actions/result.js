import * as actionTypes from "./actionTypes";

const saveResult = result => ({
  type: actionTypes.STORE_RESULT,
  value: result
});

export const storeResult = result => dispatch => {
  setTimeout(() => {
    dispatch(saveResult(result));
  }, 2000);
};

export const deleteResult = id => ({
  type: actionTypes.DELETE_RESULT,
  value: id
});
