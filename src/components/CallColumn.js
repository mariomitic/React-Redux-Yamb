import React, { useState, useEffect } from 'react'
//import './MainStyle.css'
import { connect } from 'react-redux'
import {calcOneCall} from '../redux/dices/dicesAction'
import {calcTwoCall} from '../redux/dices/dicesAction'
import {calcThreeCall} from '../redux/dices/dicesAction'
import {calcFourCall} from '../redux/dices/dicesAction'
import {calcFiveCall} from '../redux/dices/dicesAction'
import {calcSixCall} from '../redux/dices/dicesAction'
import {calcMaxCall} from '../redux/dices/dicesAction'
import {calcMinCall} from '../redux/dices/dicesAction'
import {calcThreeOfAKindCall} from '../redux/dices/dicesAction'
import {calcScaleCall} from '../redux/dices/dicesAction'
import {calcFullCall} from '../redux/dices/dicesAction'
import {calcPokerCall} from '../redux/dices/dicesAction'
import {calcYambCall} from '../redux/dices/dicesAction'



function CallColumn(props) {

  const [ oneCallTemporarilyMute, setoneCallTemporarilyMute] = useState(false);
  const [ twoCallTemporarilyMute, settwoCallTemporarilyMute] = useState(false);
  const [ threeCallTemporarilyMute, setthreeCallTemporarilyMute] = useState(false);
  const [ fourCallTemporarilyMute, setfourCallTemporarilyMute] = useState(false);
  const [ fiveCallTemporarilyMute, setfiveCallTemporarilyMute] = useState(false);
  const [ sixCallTemporarilyMute, setsixCallTemporarilyMute] = useState(false);

  const [ maxCallTemporarilyMute, setmaxCallTemporarilyMute] = useState(false);
  const [ minCallTemporarilyMute, setminCallTemporarilyMute] = useState(false);

  const [ThreeOfAKindCallTemporarilyMute, setThreeOfAKindCallTemporarilyMute] = useState(false);
  const [scaleCallTemporarilyMute, setscaleCallTemporarilyMute] = useState(false);
  const [fullCallTemporarilyMute, setfullCallTemporarilyMute] = useState(false);
  const [pokerCallTemporarilyMute, setpokerCallTemporarilyMute] = useState(false);
  const [yambCallTemporarilyMute, setyambCallTemporarilyMute] = useState(false);

  const [callone, setcallone] = useState(false);
  const [calltwo, setcalltwo] = useState(false);
  const [callthree, setcallthree] = useState(false);
  const [callfour, setcallfour] = useState(false);
  const [callfive, setcallfive] = useState(false);
  const [callsix, setcallsix] = useState(false);

  const [callmax, setcallmax] = useState(false);
  const [callmin, setcallmin] = useState(false);

  const [callThreeOfAKind, setcallThreeOfAKind] = useState(false);
  const [callscale, setcallscale] = useState(false);
  const [callfull, setcallfull] = useState(false);
  const [callpoker, setcallpoker] = useState(false);
  const [callyamb, setcallyamb] = useState(false);

  const [sum1_6, setsum1_6] = useState(0)
  const [sumMax_Min, setsumMax_Min] = useState('')
  const [sumBottom, setsumBottom] = useState('')

  useEffect(() => {
    let sum1_6Temp = 0;
    let sum1_6TempArr = [props.oneCall, props.twoCall, props.threeCall, props.fourCall, props.fiveCall, props.sixCall];
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
    

    if(typeof props.minCall === 'number' && typeof props.oneCall === 'number' && typeof props.maxCall === 'number' ){
    setsumMax_Min((props.maxCall - props.minCall) * props.oneCall)}

    let sumBottom = 0;
    let sumBottomTempArr = [props.ThreeOfAKindCall, props.scaleCall, props.fullCall, props.pokerCall, props.yambCall];
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
  }, [props.oneCall, props.twoCall, props.threeCall, props.fourCall, props.fiveCall, props.sixCall, props.maxCall, props.minCall, props.ThreeOfAKindCall, props.scaleCall, props.fullCall, props.pokerCall, props.yambCall])
  

useEffect(() => {

  if(props.clickCounter === 0 || props.clickCounter === 1)
{ setoneCallTemporarilyMute(false);
  settwoCallTemporarilyMute(false);
  setthreeCallTemporarilyMute(false);
  setfourCallTemporarilyMute(false);
  setfiveCallTemporarilyMute(false);
  setsixCallTemporarilyMute(false);

  setmaxCallTemporarilyMute(false);
  setminCallTemporarilyMute(false);

  setThreeOfAKindCallTemporarilyMute(false);
  setscaleCallTemporarilyMute(false);
  setfullCallTemporarilyMute(false);
  setpokerCallTemporarilyMute(false);
  setyambCallTemporarilyMute(false);


};

if(props.clickCounter === 2 || props.clickCounter === 3) //after second throw cant play this column anymore
{ setoneCallTemporarilyMute(true);
  settwoCallTemporarilyMute(true);
  setthreeCallTemporarilyMute(true);
  setfourCallTemporarilyMute(true);
  setfiveCallTemporarilyMute(true);
  setsixCallTemporarilyMute(true);

  setmaxCallTemporarilyMute(true);
  setminCallTemporarilyMute(true);

  setThreeOfAKindCallTemporarilyMute(true);
  setscaleCallTemporarilyMute(true);
  setfullCallTemporarilyMute(true);
  setpokerCallTemporarilyMute(true);
  setyambCallTemporarilyMute(true);


};


}, [props.clickCounter, props.oneCall])


useEffect(() => {

  //All called cells are manilupated here, not the store. Right click gives its ID that serves to manipulate cell appearance.

  if (props.calledcellId === 'callone' && props.clickCounter === 1) {
    setcallone(true)
  }

  if (typeof props.oneCall === 'number') {
    setcallone(false)
    }

  if (props.calledcellId === 'calltwo' && props.clickCounter === 1) {
    setcalltwo(true)
  }

  if (typeof props.twoCall === 'number') {
    setcalltwo(false)
  }
    
  if (props.calledcellId === 'callthree' && props.clickCounter === 1) {
    setcallthree(true)
  }

  if (typeof props.threeCall === 'number') {
    setcallthree(false)
    }
        
  if (props.calledcellId === 'callfour' && props.clickCounter === 1) {
    setcallfour(true)
  }

  if (typeof props.fourCall === 'number') {
    setcallfour(false)
    }
 
  if (props.calledcellId === 'callfive' && props.clickCounter === 1) {
    setcallfive(true)
  }

  if (typeof props.fiveCall === 'number') {
    setcallfive(false)
  }
  
  if (props.calledcellId === 'callsix' && props.clickCounter === 1) {
    setcallsix(true)
  }

  if (typeof props.sixCall === 'number') {
    setcallsix(false)
  }

  if (props.calledcellId === 'callmax' && props.clickCounter === 1) {
    setcallmax(true)
  }

  if (typeof props.maxCall === 'number') {
    setcallmax(false)
  }

  if (props.calledcellId === 'callmin' && props.clickCounter === 1) {
    setcallmin(true)
  }

  if (typeof props.minCall === 'number') {
    setcallmin(false)
  }

  if (props.calledcellId === 'callThreeOfAKind' && props.clickCounter === 1) {
    setcallThreeOfAKind(true)
  }
  
  if (typeof(props.ThreeOfAKindCall) === 'number') {
      setcallThreeOfAKind(false)
  }

  if (props.calledcellId === 'callscale' && props.clickCounter === 1) {
    setcallscale(true)
  }

  if (typeof(props.scaleCall) === 'number') {
    setcallscale(false)
  }

  if (props.calledcellId === 'callfull' && props.clickCounter === 1) {
    setcallfull(true)
  }

  if (typeof props.fullCall === 'number') {
    setcallfull(false)
  }

  if (props.calledcellId === 'callpoker' && props.clickCounter === 1) {
    setcallpoker(true)
  }

  if (typeof props.pokerCall === 'number') {
    setcallpoker(false)
  }

  if (props.calledcellId === 'callyamb' && props.clickCounter === 1) {
    setcallyamb(true)
  }

  if (typeof props.yambCall === 'number') {
    setcallyamb(false)
  }

        


}, [props.clickCounter, props.calledcellId, props.oneCall, props.twoCall, props.threeCall, props.fourCall, props.fiveCall, props.sixCall, props.maxCall, props.minCall, props.ThreeOfAKindCall, props.scaleCall, props.fullCall, props.pokerCall, props.yambCall])

useEffect(() => {
  props.getSum1_6Call(sum1_6)
  props.getSumMax_MinCall(sumMax_Min)
  props.getSumBottomCall(sumBottom);
}, [sum1_6, sumMax_Min, sumBottom, props])

  return (
<div className={ props.mustUseFiveDices ? 'callColumn freezeBackground' : 'callColumn'}>
    
    <div className='cellBorder'><b>Call</b></div>
    <div id='callone' onClick={() => {props.calcOneCall(props.calcOne)}} column="call" className={callone ? 'calledCell cellBorder' : (oneCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.oneCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.oneCall}</b></div>
    <div id='calltwo' onClick={() => {props.calcTwoCall(props.calcTwo)}} column="call" className={calltwo ? 'calledCell cellBorder' : (twoCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.twoCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.twoCall}</b></div>
    <div id='callthree' onClick={() => {props.calcThreeCall(props.calcThree)}} column="call" className={callthree ? 'calledCell cellBorder' : (threeCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.threeCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.threeCall}</b></div>
    <div id='callfour' onClick={() => {props.calcFourCall(props.calcFour)}} column="call" className={callfour ? 'calledCell cellBorder' : (fourCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.fourCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.fourCall}</b></div>
    <div id='callfive' onClick={() => {props.calcFiveCall(props.calcFive)}} column="call" className={callfive ? 'calledCell cellBorder' : (fiveCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.fiveCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.fiveCall}</b></div>
    <div id='callsix' onClick={() => {props.calcSixCall(props.calcSix)}} column="call" className={callsix ? 'calledCell cellBorder' : (sixCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.sixCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.sixCall}</b></div>
    <div className='sumBackground cellBorder'><b>{sum1_6}</b></div>
    <div id='callmax'onClick={() => {props.calcMaxCall(props.calcMax)}} column="call" className={callmax ? 'calledCell cellBorder' : (maxCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.maxCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.maxCall}</b></div>
    <div id='callmin'onClick={() => {props.calcMinCall(props.calcMin)}} column="call" className={callmin ? 'calledCell cellBorder' : (minCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.minCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.minCall}</b></div>
    <div className='sumBackground cellBorder'><b>{sumMax_Min}</b></div>
    <div id='callThreeOfAKind' onClick={() => {props.calcThreeOfAKindCall(props.calcThreeOfAKind)}} column="call" className={callThreeOfAKind ? 'calledCell cellBorder' : (ThreeOfAKindCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.ThreeOfAKindCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.ThreeOfAKindCall}</b></div>
    <div id='callscale' onClick={() => {props.calcScaleCall(props.calcScale)}} column="call" className={callscale ? 'calledCell cellBorder' : (scaleCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.scaleCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.scaleCall}</b></div>
    <div id='callfull' onClick={() => {props.calcFullCall(props.calcFull)}} column="call" className={callfull ? 'calledCell cellBorder' : (fullCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.fullCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.fullCall}</b></div>
    <div id='callpoker' onClick={() => {props.calcPokerCall(props.calcPoker)}} column="call" className={callpoker ? 'calledCell cellBorder' : (pokerCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.pokerCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.pokerCall}</b></div>
    <div id='callyamb' onClick={() => {props.calcYambCall(props.calcYamb)}} column="call" className={callyamb ? 'calledCell cellBorder' : (yambCallTemporarilyMute || props.cellIsCalled ? 'muted cellBorder' : (props.yambCallPermanentlyMute ? 'muted cellBorder' : 'clickable cellBorder'))}><b>{props.yambCall}</b></div>
    <div className='sumBackground cellBorder'><b>{sumBottom}</b></div>
        
        </div>

    
  )
}


const mapStateToProps = (state) => {
  return {
    oneCall: state.dices.oneCall,
    oneCallPermanentlyMute: state.dices.oneCallPermanentlyMute,
    twoCall: state.dices.twoCall,
    twoCallPermanentlyMute: state.dices.twoCallPermanentlyMute,
    threeCall: state.dices.threeCall,
    threeCallPermanentlyMute: state.dices.threeCallPermanentlyMute,
    fourCall: state.dices.fourCall,
    fourCallPermanentlyMute: state.dices.fourCallPermanentlyMute,
    fiveCall: state.dices.fiveCall,
    fiveCallPermanentlyMute: state.dices.fiveCallPermanentlyMute,
    sixCall: state.dices.sixCall,
    sixCallPermanentlyMute: state.dices.sixCallPermanentlyMute,

    maxCall: state.dices.maxCall,
    maxCallPermanentlyMute: state.dices.maxCallPermanentlyMute,
    mustUseFiveDices: state.dices.mustUseFiveDices,
    minCall: state.dices.minCall,
    minCallPermanentlyMute: state.dices.minCallPermanentlyMute,

    ThreeOfAKindCall: state.dices.ThreeOfAKindCall,
    ThreeOfAKindCallPermanentlyMute: state.dices.ThreeOfAKindCallPermanentlyMute,
    scaleCall: state.dices.scaleCall,
    scaleCallPermanentlyMute: state.dices.scaleCallPermanentlyMute,
    fullCall: state.dices.fullCall,
    fullCallPermanentlyMute: state.dices.fullCallPermanentlyMute,
    pokerCall: state.dices.pokerCall,
    pokerCallPermanentlyMute: state.dices.pokerCallPermanentlyMute,
    yambCall: state.dices.yambCall,
    yambCallPermanentlyMute: state.dices.yambCallPermanentlyMute,

    clickCounter: state.dices.clickCounter,
    calledCellId: state.dices.calledCellId,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     calcOneCall: (calcOne) => dispatch(calcOneCall(calcOne)),
     calcTwoCall: (calcTwo) => dispatch(calcTwoCall(calcTwo)),
     calcThreeCall: (calcThree) => dispatch(calcThreeCall(calcThree)),
     calcFourCall: (calcFour) => dispatch(calcFourCall(calcFour)),
     calcFiveCall: (calcFive) => dispatch(calcFiveCall(calcFive)),
     calcSixCall: (calcSix) => dispatch(calcSixCall(calcSix)),

     calcMaxCall: (calcMax) => dispatch(calcMaxCall(calcMax)),
     calcMinCall: (calcMin) => dispatch(calcMinCall(calcMin)),

     calcThreeOfAKindCall: (calcThreeOfAKind) => dispatch(calcThreeOfAKindCall(calcThreeOfAKind)),
     calcScaleCall: (calcScale) => dispatch(calcScaleCall(calcScale)),
     calcFullCall: (calcFull) => dispatch(calcFullCall(calcFull)),
     calcPokerCall: (calcPoker) => dispatch(calcPokerCall(calcPoker)),
     calcYambCall: (calcYamb) => dispatch(calcYambCall(calcYamb)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CallColumn)
