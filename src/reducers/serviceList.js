import { nanoid } from "nanoid";
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from "../actions/actionTypes";

const initialState = [];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case EDIT_SERVICE:
      const {idEdit, nameEdit, priceEdit} = action.payload;
      return state.map(
        service => service.id === idEdit ? {id: idEdit, name: nameEdit, price: priceEdit} : service);
    default:
      return state;
  }
}