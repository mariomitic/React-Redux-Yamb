
import { combineReducers } from "redux";
import { ROLL_DICE, ROLL_DICE2, KEEP_DICE1, RETURN_DICE1 } from "./dicesTypes";




const initialState = {
    
    dice1: '',
    dice1mute: true,
    dice2: '',
    dice2mute: true,
    dice3: '',
    dice3mute: true,
    dice4: '',
    dice4mute: true,
    dice5: '',
    dice5mute: true,
    dice6: '',
    dice6mute: true,

    keep1: '',
    keep1mute: true,
    keep2: '',
    keep2mute: true,
    keep3: '',
    keep3mute: true,
    keep4: '',
    keep4mute: true,
    keep5: '',
    keep5mute: true,
    keep6: '',
    keep6mute: true,

    clickCounter: 0,
    throwBtnMute: false
}

const dicesReducer = (state = initialState, action) => {

    switch(action.type){
        case ROLL_DICE: if(state.clickCounter === 0)
        //  if(state.dice1 !== '')return {dice1: state.dice1}
        // if(state.dice3 !== '')return {dice1: state.dice3}
        // if(state.dice5 !== '')return {dice1: state.dice5}
        
        
        return {
            ...state,
            dice1: Math.floor(Math.random() * 6 + 1),//1
            dice1mute: false,
            dice2: Math.floor(Math.random() * 6 + 1),
            dice2mute: false,
            dice3: Math.floor(Math.random() * 6 + 1),//3
            dice3mute: false,
            dice4: Math.floor(Math.random() * 6 + 1),
            dice4mute: false,
            dice5: Math.floor(Math.random() * 6 + 1),//5
            dice5mute: false,
            dice6: Math.floor(Math.random() * 6 + 1),
            dice6mute: false,
            clickCounter: state.clickCounter + 1                   
        } 
           
        if(state.clickCounter === 1) return{
            ...state,
            dice1: state.dice1 === '' ? state.dice1 : Math.floor(Math.random() * 6 + 1),
            dice2: state.dice2 === '' ? state.dice2 : Math.floor(Math.random() * 6 + 1),
            dice3: state.dice3 === '' ? state.dice3 : Math.floor(Math.random() * 6 + 1),
            dice4: state.dice4 === '' ? state.dice4 : Math.floor(Math.random() * 6 + 1),
            dice5: state.dice5 === '' ? state.dice5 : Math.floor(Math.random() * 6 + 1),
            dice6: state.dice6 === '' ? state.dice6 : Math.floor(Math.random() * 6 + 1),
            clickCounter: state.clickCounter + 1,
        
        } 
    //     if(state.clickCounter === 2) return{
    //         ...state,
    //         dice1: Math.floor(Math.random() * 6 + 1),
    //         dice2: state.dice2 === '' ? Math.floor(Math.random() * 6 + 1) : state.dice2,
    //         dice3: state.dice1 === '' ? state.dice3 : Math.floor(Math.random() * 6 + 1),
    //         dice4: state.dice1 === '' ? state.dice4 : Math.floor(Math.random() * 6 + 1),
    //         dice5: state.dice1 === '' ? state.dice5 : Math.floor(Math.random() * 6 + 1),
    //         dice6: state.dice1 === '' ? state.dice6 : Math.floor(Math.random() * 6 + 1),
    //         clickCounter: state.clickCounter + 1,
    //         throwBtnMute: true 
    //     };
        break;
        case KEEP_DICE1: return {
            ...state,
            keep1: state.dice1,
            keep1mute: false,
            dice1: '',//make immutable for next throw
            dice1mute: true
        };
        case RETURN_DICE1 : return {
            ...state,
            keep1: '',
            keep1mute: true,
            dice1: state.keep1,
            dice1mute: false
        }
        
         default: return state
    }
//}else{return}
}


// const dicesReducer2 = (state = initialState, action) => {
//     switch(action.type2){
//         case ROLL_DICE2: /*if(state.clickCounter === 1)*/ return {
//             ...state,
//             dice1: Math.floor(Math.random() * 6 + 1),
//             dice1mute: false,
//             dice2: Math.floor(Math.random() * 6 + 1),
//             dice2mute: false,
//             dice3: Math.floor(Math.random() * 6 + 1),
//             dice3mute: false,
//             dice4: Math.floor(Math.random() * 6 + 1),
//             dice4mute: false,
//             dice5: Math.floor(Math.random() * 6 + 1),
//             dice5mute: false,
//             dice6: Math.floor(Math.random() * 6 + 1),
//             dice6mute: false,
//             clickCounter: state.clickCounter + 1,                    
//         };
       
//         default: return state
//     }
// }

// const rootReducer = combineReducers({
//     dicesReducer: dicesReducer,
//     dicesReducer2: dicesReducer2
// })

//export default rootReducer

export default dicesReducer