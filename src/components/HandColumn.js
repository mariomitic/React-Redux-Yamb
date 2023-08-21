import React, { useState, useEffect } from 'react'
import './MainStyle.css'
import { connect } from 'react-redux'
import {calcOneHand} from '../redux/dices/dicesAction'
import {calcTwoHand} from '../redux/dices/dicesAction'
import {calcThreeHand} from '../redux/dices/dicesAction'
import {calcFourHand} from '../redux/dices/dicesAction'
import {calcFiveHand} from '../redux/dices/dicesAction'
import {calcSixHand} from '../redux/dices/dicesAction'
import {calcMaxHand} from '../redux/dices/dicesAction'
import {calcMinHand} from '../redux/dices/dicesAction'
import {calcThreeOfAKindHand} from '../redux/dices/dicesAction'
import {calcScaleHand} from '../redux/dices/dicesAction'
import {calcFullHand} from '../redux/dices/dicesAction'
import {calcPokerHand} from '../redux/dices/dicesAction'
import {calcYambHand} from '../redux/dices/dicesAction'




function HandColumn(props) {

  const [ oneHandTemporarilyMute, setoneHandTemporarilyMute] = useState(false);
  const [ twoHandTemporarilyMute, settwoHandTemporarilyMute] = useState(false);
  const [ threeHandTemporarilyMute, setthreeHandTemporarilyMute] = useState(false);
  const [ fourHandTemporarilyMute, setfourHandTemporarilyMute] = useState(false);
  const [ fiveHandTemporarilyMute, setfiveHandTemporarilyMute] = useState(false);
  const [ sixHandTemporarilyMute, setsixHandTemporarilyMute] = useState(false);

  const [ maxHandTemporarilyMute, setmaxHandTemporarilyMute] = useState(false);
  const [ minHandTemporarilyMute, setminHandTemporarilyMute] = useState(false);

  const [ThreeOfAKindHandTemporarilyMute, setThreeOfAKindHandTemporarilyMute] = useState(false);
  const [scaleHandTemporarilyMute, setscaleHandTemporarilyMute] = useState(false);
  const [fullHandTemporarilyMute, setfullHandTemporarilyMute] = useState(false);
  const [pokerHandTemporarilyMute, setpokerHandTemporarilyMute] = useState(false);
  const [yambHandTemporarilyMute, setyambHandTemporarilyMute] = useState(false);

  const [sum1_6, setsum1_6] = useState(0)
  const [sumMax_Min, setsumMax_Min] = useState('')
  const [sumBottom, setsumBottom] = useState('')

  useEffect(() => {
    let sum1_6Temp = 0;
    let sum1_6TempArr = [props.oneHand, props.twoHand, props.threeHand, props.fourHand, props.fiveHand, props.sixHand];
    for (let i = 0; i<sum1_6TempArr.length; i++){
      if(typeof sum1_6TempArr[i] === 'number'){
        sum1_6Temp = sum1_6Temp + sum1_6TempArr[i]
      }else{continue}
    }
    if(sum1_6Temp === 0){
      setsum1_6('')
    }
    else if(sum1_6Temp > 59){
      sum1_6Temp =  sum1_6Temp + 30;
      setsum1_6(sum1_6Temp)
    }
    else{
    setsum1_6(sum1_6Temp)
    }
    

    if(typeof props.minHand === 'number' && typeof props.oneHand === 'number' && typeof props.maxHand === 'number' ){
    setsumMax_Min((props.maxHand - props.minHand) * props.oneHand)}

    let sumBottom = 0;
    let sumBottomTempArr = [props.ThreeOfAKindHand, props.scaleHand, props.fullHand, props.pokerHand, props.yambHand];
    for (let i = 0; i<sumBottomTempArr.length; i++){
      if(typeof sumBottomTempArr[i] === 'number'){
        sumBottom = sumBottom + sumBottomTempArr[i]
      }else{continue}
    }
      if(sumBottom === 0){
        setsumBottom('')
      }else{
      setsumBottom(sumBottom)}
 
// eslint-disable-next-line
  }, [props.oneHand, props.twoHand, props.threeHand, props.fourHand, props.fiveHand, props.sixHand, props.maxHand, props.minHand, props.ThreeOfAKindHand, props.scaleHand, props.fullHand, props.pokerHand, props.yambHand])
  

useEffect(() => {



if(props.clickCounter === 0 || props.clickCounter === 1)
{ setoneHandTemporarilyMute(false);
  settwoHandTemporarilyMute(false);
  setthreeHandTemporarilyMute(false);
  setfourHandTemporarilyMute(false);
  setfiveHandTemporarilyMute(false);
  setsixHandTemporarilyMute(false);

  setmaxHandTemporarilyMute(false);
  setminHandTemporarilyMute(false);

  setThreeOfAKindHandTemporarilyMute(false);
  setscaleHandTemporarilyMute(false);
  setfullHandTemporarilyMute(false);
  setpokerHandTemporarilyMute(false);
  setyambHandTemporarilyMute(false);


};


if(props.clickCounter === 2 || props.clickCounter === 3)
{ setoneHandTemporarilyMute(true);
  settwoHandTemporarilyMute(true);
  setthreeHandTemporarilyMute(true);
  setfourHandTemporarilyMute(true);
  setfiveHandTemporarilyMute(true);
  setsixHandTemporarilyMute(true);

  setmaxHandTemporarilyMute(true);
  setminHandTemporarilyMute(true);

  setThreeOfAKindHandTemporarilyMute(true);
  setscaleHandTemporarilyMute(true);
  setfullHandTemporarilyMute(true);
  setpokerHandTemporarilyMute(true);
  setyambHandTemporarilyMute(true);


};


}, [props.clickCounter])

useEffect(() => {
  props.getSum1_6Hand(sum1_6)
  props.getSumMax_MinHand(sumMax_Min)
  props.getSumBottomHand(sumBottom);
}, [sum1_6, sumMax_Min, sumBottom, props])


  return (
  
        <div className={ props.mustUseFiveDices ? 'handColumn freezeBackground' : 'handColumn'}>
    <div className='cellBorder'><b>Hand</b></div>
    <div onClick={() => {props.calcOneHand(props.calcOne)}} column="hand" className={oneHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.oneHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.oneHand}</b></div>
    <div onClick={() => {props.calcTwoHand(props.calcTwo)}} column="hand" className={twoHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.twoHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.twoHand}</b></div>
    <div onClick={() => {props.calcThreeHand(props.calcThree)}} column="hand" className={threeHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.threeHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.threeHand}</b></div>
    <div onClick={() => {props.calcFourHand(props.calcFour)}} column="hand" className={fourHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.fourHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.fourHand}</b></div>
    <div onClick={() => {props.calcFiveHand(props.calcFive)}} column="hand" className={fiveHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.fiveHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.fiveHand}</b></div>
    <div onClick={() => {props.calcSixHand(props.calcSix)}} column="hand" className={sixHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.sixHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.sixHand}</b></div>
    <div className='sumBackground cellBorder'><b>{sum1_6}</b></div>
    <div onClick={() => {props.calcMaxHand(props.calcMax)}} column="hand" className={maxHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.maxHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.maxHand}</b></div>
    <div onClick={() => {props.calcMinHand(props.calcMin)}} column="hand" className={minHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.minHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.minHand}</b></div>
    <div className='sumBackground cellBorder'><b>{sumMax_Min}</b></div>
    <div onClick={() => {props.calcThreeOfAKindHand(props.calcThreeOfAKind)}} column="hand" className={ThreeOfAKindHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.ThreeOfAKindHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.ThreeOfAKindHand}</b></div>
    <div onClick={() => {props.calcScaleHand(props.calcScale)}} column="hand" className={scaleHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.scaleHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.scaleHand}</b></div>
    <div onClick={() => {props.calcFullHand(props.calcFull)}} column="hand" className={fullHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.fullHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.fullHand}</b></div>
    <div onClick={() => {props.calcPokerHand(props.calcPoker)}} column="hand" className={pokerHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.pokerHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.pokerHand}</b></div>
    <div onClick={() => {props.calcYambHand(props.calcYamb)}} column="hand" className={yambHandTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.yambHandPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder')}><b>{props.yambHand}</b></div>
    <div className='sumBackground cellBorder'><b>{sumBottom}</b></div>
        </div>

 
  )
}

const mapStateToProps = (state) => {
  return {
    oneHand: state.dices.oneHand,
    oneHandPermanentlyMute: state.dices.oneHandPermanentlyMute,
    twoHand: state.dices.twoHand,
    twoHandPermanentlyMute: state.dices.twoHandPermanentlyMute,
    threeHand: state.dices.threeHand,
    threeHandPermanentlyMute: state.dices.threeHandPermanentlyMute,
    fourHand: state.dices.fourHand,
    fourHandPermanentlyMute: state.dices.fourHandPermanentlyMute,
    fiveHand: state.dices.fiveHand,
    fiveHandPermanentlyMute: state.dices.fiveHandPermanentlyMute,
    sixHand: state.dices.sixHand,
    sixHandPermanentlyMute: state.dices.sixHandPermanentlyMute,

    maxHand: state.dices.maxHand,
    maxHandPermanentlyMute: state.dices.maxHandPermanentlyMute,
    mustUseFiveDices: state.dices.mustUseFiveDices,
    minHand: state.dices.minHand,
    minHandPermanentlyMute: state.dices.minHandPermanentlyMute,
    
    ThreeOfAKindHand: state.dices.ThreeOfAKindHand,
    ThreeOfAKindHandPermanentlyMute: state.dices.ThreeOfAKindHandPermanentlyMute,
    scaleHand: state.dices.scaleHand,
    scaleHandPermanentlyMute: state.dices.scaleHandPermanentlyMute,
    fullHand: state.dices.fullHand,
    fullHandPermanentlyMute: state.dices.fullHandPermanentlyMute,
    pokerHand: state.dices.pokerHand,
    pokerHandPermanentlyMute: state.dices.pokerHandPermanentlyMute,
    yambHand: state.dices.yambHand,
    yambHandPermanentlyMute: state.dices.yambHandPermanentlyMute,

    clickCounter: state.dices.clickCounter,



  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     calcOneHand: (calcOne) => dispatch(calcOneHand(calcOne)),
     calcTwoHand: (calcTwo) => dispatch(calcTwoHand(calcTwo)),
     calcThreeHand: (calcThree) => dispatch(calcThreeHand(calcThree)),
     calcFourHand: (calcFour) => dispatch(calcFourHand(calcFour)),
     calcFiveHand: (calcFive) => dispatch(calcFiveHand(calcFive)),
     calcSixHand: (calcSix) => dispatch(calcSixHand(calcSix)),
  
     calcMaxHand: (calcMax) => dispatch(calcMaxHand(calcMax)),
     calcMinHand: (calcMin) => dispatch(calcMinHand(calcMin)),
     
     calcThreeOfAKindHand: (calcThreeOfAKind) => dispatch(calcThreeOfAKindHand(calcThreeOfAKind)),
     calcScaleHand: (calcScale) => dispatch(calcScaleHand(calcScale)),
     calcFullHand: (calcFull) => dispatch(calcFullHand(calcFull)),
     calcPokerHand: (calcPoker) => dispatch(calcPokerHand(calcPoker)),
     calcYambHand: (calcYamb) => dispatch(calcYambHand(calcYamb)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HandColumn) 
