import { combineReducers } from "redux";

export const user = (state = {}, action) => {
  let stateTemp;

  switch (action.type) {
    case "UPDATED_USER_DATA":
      const { user } = action;
      stateTemp = user;
      return stateTemp;

    default:
      return state;
  }
};

export const appCombReducers = combineReducers({
  user
});
