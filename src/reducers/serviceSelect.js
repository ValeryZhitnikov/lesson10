import { SELECT_SERVICE } from "../actions/actionTypes";

const initialState = null;

export default function selectServiceReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SERVICE:
      const {service} = action.payload;
      return service;
    default:
      return state;
  }
}