const { createStore, combineReducers, compose, applyMiddleware } = require("redux");
const { productReducer } = require("./reducers/productReducers");
const { default: thunk } = require("redux-thunk");

const initialState={};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    products:productReducer,
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);

export default store;

