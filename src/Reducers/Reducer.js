/*
* Author: @nayunhwan (github.com/nayunhwan)
* Email: nayunhwan.dev@mgail.com
*/

import { DEFAULTACTION } from "../ActionCreators/_DefaultActionCreator";

import { combineReducers } from "redux";

const initialState = {
  actionResult: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULTACTION:
      return Object.assign({}, state, {
        actionResult: action.actionResult,
      });
    default:
      return state;
  }
};

const Reducer = combineReducers({ reducer });
export default Reducer;
