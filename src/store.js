// import { createStore } from "redux";
import { legacy_createStore as createStore } from 'redux';

import rootReducers from "./redux/reducers/main";

const store = createStore(
    rootReducers
);

export default store;