import { FILTER_SERVICE } from "../actions/actionTypes";

const initialState = '';

export default function setServiceFilter(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE:
      const { name } = action.payload;
      return name;
    default:
      return state;
  }
}