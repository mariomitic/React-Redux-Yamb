import { createStore } from "redux";
import twoReducers from "./dices/dicesReducer";


const redux = require('redux')
const combineReducers = redux.combineReducers;

const rootReducer = combineReducers({
    dices: twoReducers[0],
    rulesReducer: twoReducers[1]

})


const store = createStore(rootReducer)

export default store