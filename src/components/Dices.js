import React, {useEffect, useState} from 'react'
//import './MainStyle.css'
import { connect } from 'react-redux'
import { rollDice } from '../redux/dices/dicesAction'
import Calculations from './Calculations'

import { keepDice1 } from '../redux/dices/dicesAction'
import { returnDice1 } from '../redux/dices/dicesAction'
import { keepDice2 } from '../redux/dices/dicesAction'
import { returnDice2 } from '../redux/dices/dicesAction'
import { keepDice3 } from '../redux/dices/dicesAction'
import { returnDice3 } from '../redux/dices/dicesAction'
import { keepDice4 } from '../redux/dices/dicesAction'
import { returnDice4 } from '../redux/dices/dicesAction'
import { keepDice5 } from '../redux/dices/dicesAction'
import { returnDice5 } from '../redux/dices/dicesAction'
import { keepDice6 } from '../redux/dices/dicesAction'
import { returnDice6 } from '../redux/dices/dicesAction'


import {closeAlert} from '../redux/dices/dicesAction'
import {displayRules} from '../redux/dices/dicesAction'



function Dices(props) {

const [allKept, setallKept] = useState();

const [calledcellId, setcalledcellId] = useState();

window.addEventListener('contextmenu', (e) => {//right click gives target ID for calling cells
let cell_Id = e.target.getAttribute('id');
if (props.clickCounter === 0) {//if right click on called cell before first throw does not react
   setcalledcellId()
}
if(props.clickCounter >= 1){
setcalledcellId(cell_Id);
}
}, false );


const [cellIsCalled, setcellIsCalled] = useState(false)

useEffect(() => {
  if(props.clickCounter === 0){
    setcellIsCalled(false);
    setcalledcellId()
  }
  if(typeof(calledcellId) === 'string' && props.clickCounter >= 1){
    setcellIsCalled(true)
  }
 }, [calledcellId, cellIsCalled, props.clickCounter])

useEffect(() => {
setallKept([props.keep1, props.keep2, props.keep3, props.keep4, props.keep5, props.keep6]);
}, [props.keep1, props.keep2, props.keep3, props.keep4, props.keep5, props.keep6])

useEffect(() => {
window.addEventListener('contextmenu', (e) => {
   e.preventDefault();

      }, false );
}, [])


  return (

    


     <div >  

{props.mustUseFiveDices && (
      <div className='diceAlert'> <h2>Must select 5 dices!</h2>
      <br></br>
      <button onClick={props.closeAlert} className='ok_btn'>Ok</button>
      
      </div>)
    }

<button onClick={() => {props.displayRules()}} className='rules_btn'><b>Rules</b></button>
      {props.showRules && (
      <div className='popuptext'>
      <button onClick={() => {props.displayRules()}} className='close_btn'><b>Close</b></button>
      <h2 className='rulesTitle'>Game of Yamb Rules</h2>
          <h3>Column rules:</h3>
          <p>1. "Down" column can be entered from top to bottom.
          <br></br>
             2. "Free" column can be entered randomly.
          <br></br>
             3. "Up" column can be entered from the bottom up.
          <br></br>
             4. "Call" column can be entered randomly, each cell must be called after first throw (right click).
          <br></br>
             5. "Hand" column can be entered random only after first throw.</p>

          <h3>Values:</h3>
          <p>1. "Three": Three of a kind. (ex. 3,3,3)
          <br></br>
             2. "Straight": Five dices arranged as a scale. (ex. 1,2,3,4,5 or 2,3,4,5,6)
          <br></br>
             3. "Full": Tree of a kind + one pair. (ex. 4,4,4,3,3)
          <br></br>
             4. "Poker": Four of a kind. (ex. 5,5,5,5)
          <br></br>
             5. "Yamb": Five of a kind. (ex. 6,6,6,6,6)</p>

          <h3>Calculations:</h3>
          <p>1. Each column's (1-6) sum greater than 59pts receives bonus of 30pts.
          <br></br>
             2. Difference between Max and Min multiplies by value of "1".
          <br></br>
             3. "Three" gets bonus of 20pts on top of sum of all dices (ex. 6,6,6 gives 38pts).
          <br></br>
            4. "Straight" won in one throw wins 66pts, second throw 56pts, third throw 46pts.
          <br></br>
             5. "Full" gets bonus of 30pts on top of sum of all dices (ex. 6,6,6,5,5 gives 58pts).
          <br></br>
             6. "Poker" gets bonus of 40pts on top of sum of all dices (ex. 6,6,6,6 gives 64pts).
          <br></br>
             7. "Yamb" gets bonus of 50pts on top of sum of all dices (ex. 6,6,6,6,6 gives 80pts).</p>


      </div>)}


    <div  className = {props.showRules || props.engGameMessage ? 'bluredBackground' : ''}>
     <Calculations allKept={allKept} calledcellId={calledcellId} cellIsCalled={cellIsCalled}/>



    {/* this is throw counter */}
    <h2 className={'countThrow'}>{props.clickCounter}</h2>
   
<div className='dicesThrow'>
    <div onClick={props.rollDice} className={(props.numberFieldsLeftDownFreeUp === 0 && props.clickCounter === 1 && !cellIsCalled) || props.throwBtnMute ? 'muted throwBox' : 'throwBox'}><b>Throw Dices</b></div>
   
    <div onClick={props.keepDice1}  className={props.dice1mute ? 'muted thrownDice1' : 'thrownDice1'}>{props.dice1}</div>
    <div onClick={props.keepDice2}  className={props.dice2mute ? 'muted thrownDice2' : 'thrownDice2'}>{props.dice2}</div>
    <div onClick={props.keepDice3}  className={props.dice3mute ? 'muted thrownDice3' : 'thrownDice3'}>{props.dice3}</div>
    <div onClick={props.keepDice4}  className={props.dice4mute ? 'muted thrownDice4' : 'thrownDice4'}>{props.dice4}</div>
    <div onClick={props.keepDice5}  className={props.dice5mute ? 'muted thrownDice5' : 'thrownDice5'}>{props.dice5}</div>
    <div onClick={props.keepDice6}  className={props.dice6mute ? 'muted thrownDice6' : 'thrownDice6'}>{props.dice6}</div>
</div>

<div className='dicesKeep'>
    <div className='keepBox'><b>Keep Dices</b></div>

    <div onClick={props.returnDice1} className={props.keep1mute ? 'muted keptDice1' : 'keptDice1'}>{props.keep1}</div>
    <div onClick={props.returnDice2} className={props.keep2mute ? 'muted keptDice2' : 'keptDice2'}>{props.keep2}</div>
    <div onClick={props.returnDice3} className={props.keep3mute ? 'muted keptDice3' : 'keptDice3'}>{props.keep3}</div>
    <div onClick={props.returnDice4} className={props.keep4mute ? 'muted keptDice4' : 'keptDice4'}>{props.keep4}</div>
    <div onClick={props.returnDice5} className={props.keep5mute ? 'muted keptDice5' : 'keptDice5'}>{props.keep5}</div>
    <div onClick={props.returnDice6} className={props.keep6mute ? 'muted keptDice6' : 'keptDice6'}>{props.keep6}</div>
</div>
    <div>
    </div>
    </div>


    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    
    dice1: state.dices.dice1,
    dice1mute: state.dices.dice1mute,
    dice2: state.dices.dice2,
    dice2mute: state.dices.dice2mute,
    dice3: state.dices.dice3,
    dice3mute: state.dices.dice3mute,
    dice4: state.dices.dice4,
    dice4mute: state.dices.dice4mute,
    dice5: state.dices.dice5,
    dice5mute: state.dices.dice5mute,
    dice6: state.dices.dice6,
    dice6mute: state.dices.dice6mute,

    keep1: state.dices.keep1,
    keep1mute: state.dices.keep1mute,
    keep2: state.dices.keep2,
    keep2mute: state.dices.keep2mute,
    keep3: state.dices.keep3,
    keep3mute: state.dices.keep3mute,
    keep4: state.dices.keep4,
    keep4mute: state.dices.keep4mute,
    keep5: state.dices.keep5,
    keep5mute: state.dices.keep5mute,
    keep6: state.dices.keep6,
    keep6mute: state.dices.keep6mute,

    clickCounter: state.dices.clickCounter,

    throwBtnMute: state.dices.throwBtnMute,
    mustUseFiveDices: state.dices.mustUseFiveDices,
    showRules: state.rulesReducer.displayRules,
   
    numberFieldsLeftDownFreeUp: state.dices.numberFieldsLeftDownFreeUp,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    rollDice: () => dispatch(rollDice()),
    keepDice1: () => dispatch(keepDice1()),
    returnDice1: () => dispatch(returnDice1()),
    keepDice2: () => dispatch(keepDice2()),
    returnDice2: () => dispatch(returnDice2()),
    keepDice3: () => dispatch(keepDice3()),
    returnDice3: () => dispatch(returnDice3()),
    keepDice4: () => dispatch(keepDice4()),
    returnDice4: () => dispatch(returnDice4()),
    keepDice5: () => dispatch(keepDice5()),
    returnDice5: () => dispatch(returnDice5()),
    keepDice6: () => dispatch(keepDice6()),
    returnDice6: () => dispatch(returnDice6()),

    closeAlert: () => dispatch(closeAlert()),
    displayRules: () => dispatch(displayRules()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dices)