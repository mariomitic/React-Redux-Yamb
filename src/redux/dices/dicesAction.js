
export const rollDice = () => {
    return {
        type: 'ROLL_DICE',
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


export const keepDice2 = () => {
    return {
        type: 'KEEP_DICE2'
    }
};
export const returnDice2 = () => {
    return {
        type: 'RETURN_DICE2'
    }
}


export const keepDice3 = () => {
    return {
        type: 'KEEP_DICE3'
    }
};
export const returnDice3 = () => {
    return {
        type: 'RETURN_DICE3'
    }
}


export const keepDice4 = () => {
    return {
        type: 'KEEP_DICE4'
    }
};
export const returnDice4 = () => {
    return {
        type: 'RETURN_DICE4'
    }
}


export const keepDice5 = () => {
    return {
        type: 'KEEP_DICE5'
    }
};
export const returnDice5 = () => {
    return {
        type: 'RETURN_DICE5'
    }
}


export const keepDice6 = () => {
    return {
        type: 'KEEP_DICE6'
    }
};
export const returnDice6 = () => {
    return {
        type: 'RETURN_DICE6'
    }
}



export const calcOneDown = (calcOne) => {
    return {
        type: 'CALC_ONE_DOWN',
        payload: calcOne(),     
    }
}

export const calcOneFree = (calcOne) => {
    return {
        type: 'CALC_ONE_FREE',
        payload: calcOne(),
    }
}

export const calcOneUp = (calcOne) => {
    return {
        type: 'CALC_ONE_UP',
        payload: calcOne(),
    }
}

export const calcOneCall = (calcOne) => {
    return {
        type: 'CALC_ONE_CALL',
        payload: calcOne(),
    }
}

export const calcOneHand = (calcOne) => {
    return {
        type: 'CALC_ONE_HAND',
        payload: calcOne(),
    }
}


export const calcTwoDown = (calcTwo) => {
    return {
        type: 'CALC_TWO_DOWN',
        payload: calcTwo(),     
    }
}

export const calcTwoFree = (calcTwo) => {
    return {
        type: 'CALC_TWO_FREE',
        payload: calcTwo(),
    }
}

export const calcTwoUp = (calcTwo) => {
    return {
        type: 'CALC_TWO_UP',
        payload: calcTwo(),
    }
}

export const calcTwoCall = (calcTwo) => {
    return {
        type: 'CALC_TWO_CALL',
        payload: calcTwo(),
    }
}

export const calcTwoHand = (calcTwo) => {
    return {
        type: 'CALC_TWO_HAND',
        payload: calcTwo(),
    }
}


export const calcThreeDown = (calcThree) => {
    return {
        type: 'CALC_THREE_DOWN',
        payload: calcThree(),     
    }
}

export const calcThreeFree = (calcThree) => {
    return {
        type: 'CALC_THREE_FREE',
        payload: calcThree(),
    }
}

export const calcThreeUp = (calcThree) => {
    return {
        type: 'CALC_THREE_UP',
        payload: calcThree(),
    }
}

export const calcThreeCall = (calcThree) => {
    return {
        type: 'CALC_THREE_CALL',
        payload: calcThree(),
    }
}

export const calcThreeHand = (calcThree) => {
    return {
        type: 'CALC_THREE_HAND',
        payload: calcThree(),
    }
}


export const calcFourDown = (calcFour) => {
    return {
        type: 'CALC_FOUR_DOWN',
        payload: calcFour(),     
    }
}

export const calcFourFree = (calcFour) => {
    return {
        type: 'CALC_FOUR_FREE',
        payload: calcFour(),
    }
}

export const calcFourUp = (calcFour) => {
    return {
        type: 'CALC_FOUR_UP',
        payload: calcFour(),
    }
}

export const calcFourCall = (calcFour) => {
    return {
        type: 'CALC_FOUR_CALL',
        payload: calcFour(),
    }
}

export const calcFourHand = (calcFour) => {
    return {
        type: 'CALC_FOUR_HAND',
        payload: calcFour(),
    }
}

export const calcFiveDown = (calcFive) => {
    return {
        type: 'CALC_FIVE_DOWN',
        payload: calcFive(),     
    }
}

export const calcFiveFree = (calcFive) => {
    return {
        type: 'CALC_FIVE_FREE',
        payload: calcFive(),
    }
}

export const calcFiveUp = (calcFive) => {
    return {
        type: 'CALC_FIVE_UP',
        payload: calcFive(),
    }
}

export const calcFiveCall = (calcFive) => {
    return {
        type: 'CALC_FIVE_CALL',
        payload: calcFive(),
    }
}

export const calcFiveHand = (calcFive) => {
    return {
        type: 'CALC_FIVE_HAND',
        payload: calcFive(),
    }
}

export const calcSixDown = (calcSix) => {
    return {
        type: 'CALC_SIX_DOWN',
        payload: calcSix(),     
    }
}

export const calcSixFree = (calcSix) => {
    return {
        type: 'CALC_SIX_FREE',
        payload: calcSix(),
    }
}

export const calcSixUp = (calcSix) => {
    return {
        type: 'CALC_SIX_UP',
        payload: calcSix(),
    }
}

export const calcSixCall = (calcSix) => {
    return {
        type: 'CALC_SIX_CALL',
        payload: calcSix(),
    }
}

export const calcSixHand = (calcSix) => {
    return {
        type: 'CALC_SIX_HAND',
        payload: calcSix(),
    }
}

export const calcMaxDown = (calcMax) => {
    return {
        type: 'CALC_MAX_DOWN',
        payload: calcMax(),     
    }
}

export const calcMaxFree = (calcMax) => {
    return {
        type: 'CALC_MAX_FREE',
        payload: calcMax(),     
    }
}

export const calcMaxUp = (calcMax) => {
    return {
        type: 'CALC_MAX_UP',
        payload: calcMax(),     
    }
}

export const calcMaxCall = (calcMax) => {
    return {
        type: 'CALC_MAX_CALL',
        payload: calcMax(),     
    }
}

export const calcMaxHand = (calcMax) => {
    return {
        type: 'CALC_MAX_HAND',
        payload: calcMax(),     
    }
}

export const calcMinDown = (calcMin) => {
    return {
        type: 'CALC_MIN_DOWN',
        payload: calcMin(),     
    }
}

export const calcMinFree = (calcMin) => {
    return {
        type: 'CALC_MIN_FREE',
        payload: calcMin(),     
    }
}

export const calcMinUp = (calcMin) => {
    return {
        type: 'CALC_MIN_UP',
        payload: calcMin(),     
    }
}

export const calcMinCall = (calcMin) => {
    return {
        type: 'CALC_MIN_CALL',
        payload: calcMin(),     
    }
}

export const calcMinHand = (calcMin) => {
    return {
        type: 'CALC_MIN_HAND',
        payload: calcMin(),     
    }
}

export const calcThreeOfAKindDown = (calcThreeOfAKind) => {
    return {
        type: 'CALC_THREE_OF_A_KIND_DOWN',
        payload: calcThreeOfAKind(),     
    }
}

export const calcThreeOfAKindFree = (calcThreeOfAKind) => {
    return {
        type: 'CALC_THREE_OF_A_KIND_FREE',
        payload: calcThreeOfAKind(),     
    }
}

export const calcThreeOfAKindUp = (calcThreeOfAKind) => {
    return {
        type: 'CALC_THREE_OF_A_KIND_UP',
        payload: calcThreeOfAKind(),     
    }
}

export const calcThreeOfAKindCall = (calcThreeOfAKind) => {
    return {
        type: 'CALC_THREE_OF_A_KIND_CALL',
        payload: calcThreeOfAKind(),     
    }
}

export const calcThreeOfAKindHand = (calcThreeOfAKind) => {
    return {
        type: 'CALC_THREE_OF_A_KIND_HAND',
        payload: calcThreeOfAKind(),     
    }
}


export const calcScaleDown = (calcScale) => {
    return {
        type: 'CALC_SCALE_DOWN',
        payload: calcScale(),     
    }
}
export const calcScaleFree = (calcScale) => {
    return {
        type: 'CALC_SCALE_FREE',
        payload: calcScale(),     
    }
}

export const calcScaleUp = (calcScale) => {
    return {
        type: 'CALC_SCALE_UP',
        payload: calcScale(),     
    }
}

export const calcScaleCall = (calcScale) => {
    return {
        type: 'CALC_SCALE_CALL',
        payload: calcScale(),     
    }
}

export const calcScaleHand = (calcScale) => {
    return {
        type: 'CALC_SCALE_HAND',
        payload: calcScale(),     
    }
}



export const calcFullDown = (calcFull) => {
    return {
        type: 'CALC_FULL_DOWN',
        payload: calcFull(),     
    }
}
export const calcFullFree = (calcFull) => {
    return {
        type: 'CALC_FULL_FREE',
        payload: calcFull(),     
    }
}

export const calcFullUp = (calcFull) => {
    return {
        type: 'CALC_FULL_UP',
        payload: calcFull(),     
    }
}

export const calcFullCall = (calcFull) => {
    return {
        type: 'CALC_FULL_CALL',
        payload: calcFull(),     
    }
}

export const calcFullHand = (calcFull) => {
    return {
        type: 'CALC_FULL_HAND',
        payload: calcFull(),     
    }
}

export const calcPokerDown = (calcPoker) => {
    return {
        type: 'CALC_POKER_DOWN',
        payload: calcPoker(),     
    }
}
export const calcPokerFree = (calcPoker) => {
    return {
        type: 'CALC_POKER_FREE',
        payload: calcPoker(),     
    }
}

export const calcPokerUp = (calcPoker) => {
    return {
        type: 'CALC_POKER_UP',
        payload: calcPoker(),     
    }
}

export const calcPokerCall = (calcPoker) => {
    return {
        type: 'CALC_POKER_CALL',
        payload: calcPoker(),     
    }
}

export const calcPokerHand = (calcPoker) => {
    return {
        type: 'CALC_POKER_HAND',
        payload: calcPoker(),     
    }
}


export const calcYambDown = (calcYamb) => {
    return {
        type: 'CALC_YAMB_DOWN',
        payload: calcYamb(),     
    }
}
export const calcYambFree = (calcYamb) => {
    return {
        type: 'CALC_YAMB_FREE',
        payload: calcYamb(),     
    }
}

export const calcYambUp = (calcYamb) => {
    return {
        type: 'CALC_YAMB_UP',
        payload: calcYamb(),     
    }
}

export const calcYambCall = (calcYamb) => {
    return {
        type: 'CALC_YAMB_CALL',
        payload: calcYamb(),     
    }
}

export const calcYambHand = (calcYamb) => {
    return {
        type: 'CALC_YAMB_HAND',
        payload: calcYamb(),     
    }
}


export const closeAlert = () => {
    return {
        type: 'CLOSE_ALERT'
    }

}


export const displayRules = () => {
    return {
        type: 'DISPLAY_RULES'
    }
}

