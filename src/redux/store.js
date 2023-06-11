import { createStore } from "redux";
import dicesReducer from "./dices/dicesReducer";
//import rootReducer from "./dices/dicesReducer";


//const store = createStore(rootReducer)
const store = createStore(dicesReducer)

export default store