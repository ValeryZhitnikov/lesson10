import { ADD_SERVICE, REMOVE_SERVICE, SELECT_SERVICE, EDIT_SERVICE, FILTER_SERVICE } from "./actionTypes";

export function addService(name, price) {
    return { type: ADD_SERVICE, payload: {name, price} }
}

export function removeService(id) {
    return { type: REMOVE_SERVICE, payload: {id} }
}

export function selectService(service) {
    return { type: SELECT_SERVICE, payload: {service} }
}

export function editService(idEdit, nameEdit, priceEdit) {
    return { type: EDIT_SERVICE, payload: {idEdit, nameEdit, priceEdit} }
}

export function filterService(name) {
    return { type: FILTER_SERVICE, payload: {name} }
}