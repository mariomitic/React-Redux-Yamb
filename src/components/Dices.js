import React from 'react'
import './MainStyle.css'
import { connect } from 'react-redux'
//import { useSelector } from 'react-redux'
import { rollDice } from '../redux/dices/dicesAction'
import Calculations from './Calculations'
import { keepDice1 } from '../redux/dices/dicesAction'
import { returnDice1 } from '../redux/dices/dicesAction'


function Dices(props) {

// useSelector(state) => {
//   clickCounter: state.clickCounter,
//   dice1: state.dice1,
//   dice1mute: state.dice1mute,
//   dice2: state.dice2,
//   dice2mute: state.dice2mute,
//   dice3: state.dice3,
//   dice3mute: state.dice3mute,
//   dice4: state.dice4,
//   dice4mute: state.dice4mute,
//   dice5: state.dice5,
//   dice5mute: state.dice5mute,
//   dice6: state.dice6,
//   dice6mute: state.dice6mute,

//   keep1: state.keep1,
//   keep1mute: state.keep1mute,
//   keep2: state.keep2,
//   keep2mute: state.keep2mute,
//   keep3: state.keep3,
//   keep3mute: state.keep3mute,
//   keep4: state.keep4,
//   keep4mute: state.keep4mute,
//   keep5: state.keep5,
//   keep5mute: state.keep5mute,
//   keep6: state.keep6,
//   keep6mute: state.keep6mute,

//   throwBtnMute: state.throwBtnMute
// }

 
 //console.log(props.state)
 console.log(props.clickCounter)
  return (


     <div >  
     <Calculations />

    {/* throw counter */}
    <h2 className={'countThrow'}>{props.clickCounter}</h2>
   
<div className='dicesThrow'>
    <div onClick={props.rollDice} className={props.throwBtnMute ? 'muted throwBox' : 'throwBox'}><b>Throw Dices</b></div>
   
    <div onClick={props.keepDice1} id='throw1'  className={props.dice1mute ? 'muted thrownDice1' : 'thrownDice1'}>{props.dice1}</div>
    <div id='throw2'  className={props.dice2mute ? 'muted thrownDice2' : 'thrownDice2'}>{props.dice2}</div>
    <div id='throw3'  className={props.dice3mute ? 'muted thrownDice3' : 'thrownDice3'}>{props.dice3}</div>
    <div id='throw4'  className={props.dice4mute ? 'muted thrownDice4' : 'thrownDice4'}>{props.dice4}</div>
    <div id='throw5'  className={props.dice5mute ? 'muted thrownDice5' : 'thrownDice5'}>{props.dice5}</div>
    <div id='throw6'  className={props.dice6mute ? 'muted thrownDice6' : 'thrownDice6'}>{props.dice6}</div>
</div>

<div className='dicesKeep'>
    <div className='keepBox'><b>Keep Dices</b></div>

    <div onClick={props.returnDice1} id='keep1' className={props.keep1mute ? 'muted keptDice1' : 'keptDice1'}>{props.keep1}</div>
    <div id='keep2' className={props.keep2mute ? 'muted keptDice2' : 'keptDice2'}>{props.keep2}</div>
    <div id='keep3' className={props.keep3mute ? 'muted keptDice3' : 'keptDice3'}>{props.keep3}</div>
    <div id='keep4' className={props.keep4mute ? 'muted keptDice4' : 'keptDice4'}>{props.keep4}</div>
    <div id='keep5' className={props.keep5mute ? 'muted keptDice5' : 'keptDice5'}>{props.keep5}</div>
    <div id='keep6' className={props.keep6mute ? 'muted keptDice6' : 'keptDice6'}>{props.keep6}</div>
</div>
    <div>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    clickCounter: state.clickCounter,
    dice1: state.dice1,
    dice1mute: state.dice1mute,
    dice2: state.dice2,
    dice2mute: state.dice2mute,
    dice3: state.dice3,
    dice3mute: state.dice3mute,
    dice4: state.dice4,
    dice4mute: state.dice4mute,
    dice5: state.dice5,
    dice5mute: state.dice5mute,
    dice6: state.dice6,
    dice6mute: state.dice6mute,

    keep1: state.keep1,
    keep1mute: state.keep1mute,
    keep2: state.keep2,
    keep2mute: state.keep2mute,
    keep3: state.keep3,
    keep3mute: state.keep3mute,
    keep4: state.keep4,
    keep4mute: state.keep4mute,
    keep5: state.keep5,
    keep5mute: state.keep5mute,
    keep6: state.keep6,
    keep6mute: state.keep6mute,

    throwBtnMute: state.throwBtnMute

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    rollDice: () => dispatch(rollDice()),
    keepDice1: () => dispatch(keepDice1()),
    returnDice1: () => dispatch(returnDice1())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dices)