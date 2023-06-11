// import { ROLL_DICE } from "./dicesTypes";
// import { KEEP_DICE1 } from "./dicesTypes";


export const rollDice = () => {
    return {
        type: 'ROLL_DICE',
        type2: 'ROLL_DICE2'
       }
};



export const keepDice1 = () => {
    return {
        type: 'KEEP_DICE1'
    }
};
export const returnDice1 = () => {
    return {
        type: 'RETURN_DICE1'
    }
}

