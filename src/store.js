const { createStore, combineReducers, compose, applyMiddleware } = require("redux");
const { productReducer } = require("./reducers/productReducers");
const { cartReducer } = require("./reducers/cartReducers");
const { default: thunk } = require("redux-thunk");

const initialState={};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    products:productReducer,
    cart:cartReducer,
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);

export default store;

