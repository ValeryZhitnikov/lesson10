import { combineReducers, legacy_createStore } from "redux";
import serviceListReducer from "../reducers/serviceList";
import selectServiceReducer from "../reducers/serviceSelect";
import setServiceFilter from "../reducers/filterList";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    selectedService: selectServiceReducer,
    filterServiceValue: setServiceFilter
})

const store = legacy_createStore(reducer);

export default store;