export const SET_USER_LOGIN = "SET_USER_LOGIN";

export const setUserLogin = (value) => (dispatch) => {
  dispatch({
    type: SET_USER_LOGIN,
    payload: value,
  });
};
