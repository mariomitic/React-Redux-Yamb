import React, {useState, useEffect} from 'react'
//import './MainStyle.css'
import { connect } from 'react-redux'
import {calcOneFree} from '../redux/dices/dicesAction'
import {calcTwoFree} from '../redux/dices/dicesAction'
import {calcThreeFree} from '../redux/dices/dicesAction'
import {calcFourFree} from '../redux/dices/dicesAction'
import {calcFiveFree} from '../redux/dices/dicesAction'
import {calcSixFree} from '../redux/dices/dicesAction'
import {calcMaxFree} from '../redux/dices/dicesAction'
import {calcMinFree} from '../redux/dices/dicesAction'
import {calcThreeOfAKindFree} from '../redux/dices/dicesAction'
import {calcScaleFree} from '../redux/dices/dicesAction'
import {calcFullFree} from '../redux/dices/dicesAction'
import {calcPokerFree} from '../redux/dices/dicesAction'
import {calcYambFree} from '../redux/dices/dicesAction'


function FreeColumn(props) {

  const [sum1_6, setsum1_6] = useState(0)
  const [sumMax_Min, setsumMax_Min] = useState('')
  const [sumBottom, setsumBottom] = useState('')

  useEffect(() => {
    let sum1_6Temp = 0;
    let sum1_6TempArr = [props.oneFree, props.twoFree, props.threeFree, props.fourFree, props.fiveFree, props.sixFree];
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
    

    if(typeof props.minFree === 'number' && typeof props.oneFree === 'number' && typeof props.maxFree === 'number' ){
    setsumMax_Min((props.maxFree - props.minFree) * props.oneFree)}

    let sumBottom = 0;
    let sumBottomTempArr = [props.ThreeOfAKindFree, props.scaleFree, props.fullFree, props.pokerFree, props.yambFree];
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
  }, [props.oneFree, props.twoFree, props.threeFree, props.fourFree, props.fiveFree, props.sixFree, props.maxFree, props.minFree, props.ThreeOfAKindFree, props.scaleFree, props.fullFree, props.pokerFree, props.yambFree])

  useEffect(() => {
    props.getSum1_6Free(sum1_6);
    props.getSumMax_MinFree(sumMax_Min)
    props.getSumBottomFree(sumBottom);
  }, [sum1_6, sumMax_Min, sumBottom, props])

  return (
  
        <div className={ props.mustUseFiveDices ? 'freeColumn freezeBackground' : 'freeColumn'}>
    <div className='cellBorder'><b>Free</b></div>
    <div onClick={() => {props.calcOneFree(props.calcOne)}} column="free" className={props.oneFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.oneFree}</b></div>
    <div onClick={() => {props.calcTwoFree(props.calcTwo)}} column="free" className={props.twoFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.twoFree}</b></div>
    <div onClick={() => {props.calcThreeFree(props.calcThree)}} column="free" className={props.threeFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.threeFree}</b></div>
    <div onClick={() => {props.calcFourFree(props.calcFour)}} column="free" className={props.fourFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fourFree}</b></div>
    <div onClick={() => {props.calcFiveFree(props.calcFive)}} column="free" className={props.fiveFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fiveFree}</b></div>
    <div onClick={() => {props.calcSixFree(props.calcSix)}} column="free" className={props.sixFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.sixFree}</b></div>
    <div className='sumBackground cellBorder'><b>{sum1_6}</b></div>
    <div onClick={() => {props.calcMaxFree(props.calcMax)}} column="free" className={props.maxFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.maxFree}</b></div>
    <div onClick={() => {props.calcMinFree(props.calcMin)}} column="free" className={props.minFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.minFree}</b></div>
    <div className='sumBackground cellBorder'><b>{sumMax_Min}</b></div>
    <div onClick={() => {props.calcThreeOfAKindFree(props.calcThreeOfAKind)}} column="free" className={props.ThreeOfAKindFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.ThreeOfAKindFree}</b></div>
    <div onClick={() => {props.calcScaleFree(props.calcScale)}} column="free" className={props.scaleFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.scaleFree}</b></div>
    <div onClick={() => {props.calcFullFree(props.calcFull)}} column="free" className={props.fullFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fullFree}</b></div>
    <div onClick={() => {props.calcPokerFree(props.calcPoker)}} column="free" className={props.pokerFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.pokerFree}</b></div>
    <div onClick={() => {props.calcYambFree(props.calcYamb)}} column="free" className={props.yambFreePermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.yambFree}</b></div>
    <div className='sumBackground cellBorder'><b>{sumBottom}</b></div>
        </div>

   
  )
}

const mapStateToProps = (state) => {
  return {
    oneFree: state.dices.oneFree,
    oneFreePermanentlyMute: state.dices.oneFreePermanentlyMute,
    twoFree: state.dices.twoFree,
    twoFreePermanentlyMute: state.dices.twoFreePermanentlyMute,
    threeFree: state.dices.threeFree,
    threeFreePermanentlyMute: state.dices.threeFreePermanentlyMute,
    fourFree: state.dices.fourFree,
    fourFreePermanentlyMute: state.dices.fourFreePermanentlyMute,
    fiveFree: state.dices.fiveFree,
    fiveFreePermanentlyMute: state.dices.fiveFreePermanentlyMute,
    sixFree: state.dices.sixFree,
    sixFreePermanentlyMute: state.dices.sixFreePermanentlyMute,

    maxFree: state.dices.maxFree,
    maxFreePermanentlyMute: state.dices.maxFreePermanentlyMute,
    mustUseFiveDices: state.dices.mustUseFiveDices,
    minFree: state.dices.minFree,
    minFreePermanentlyMute: state.dices.minFreePermanentlyMute,

    ThreeOfAKindFree: state.dices.ThreeOfAKindFree,
    ThreeOfAKindFreePermanentlyMute: state.dices.ThreeOfAKindFreePermanentlyMute,
    scaleFree: state.dices.scaleFree,
    scaleFreePermanentlyMute: state.dices.scaleFreePermanentlyMute,
    fullFree: state.dices.fullFree,
    fullFreePermanentlyMute: state.dices.fullFreePermanentlyMute,
    pokerFree: state.dices.pokerFree,
    pokerFreePermanentlyMute: state.dices.pokerFreePermanentlyMute,
    yambFree: state.dices.yambFree,
    yambFreePermanentlyMute: state.dices.yambFreePermanentlyMute,

    clickCounter: state.dices.clickCounter,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calcOneFree: (calcOne) => dispatch(calcOneFree(calcOne)),
    calcTwoFree: (calcTwo) => dispatch(calcTwoFree(calcTwo)),
    calcThreeFree: (calcThree) => dispatch(calcThreeFree(calcThree)),
    calcFourFree: (calcFour) => dispatch(calcFourFree(calcFour)),
    calcFiveFree: (calcFive) => dispatch(calcFiveFree(calcFive)),
    calcSixFree: (calcSix) => dispatch(calcSixFree(calcSix)),
    
    calcMaxFree: (calcMax) => dispatch(calcMaxFree(calcMax)),
    calcMinFree: (calcMin) => dispatch(calcMinFree(calcMin)),

    calcThreeOfAKindFree: (calcThreeOfAKind) => dispatch(calcThreeOfAKindFree(calcThreeOfAKind)),
    calcScaleFree: (calcScale) => dispatch(calcScaleFree(calcScale)),
    calcFullFree: (calcFull) => dispatch(calcFullFree(calcFull)),
    calcPokerFree: (calcPoker) => dispatch(calcPokerFree(calcPoker)),
    calcYambFree: (calcYamb) => dispatch(calcYambFree(calcYamb)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FreeColumn)
