import { SET_USER_LOGIN } from "./actions";

const initialState = {
  userLogin: false,
};

const loginReducer = (state = initialState, action) => {
  return { ...state, userLogin: action.payload };
};
export default loginReducer;
