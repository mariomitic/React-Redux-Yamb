import React, {useState, useEffect} from 'react'
//import './MainStyle.css'
import { connect } from 'react-redux'
import {calcOneDown} from '../redux/dices/dicesAction'
import {calcTwoDown} from '../redux/dices/dicesAction'
import {calcThreeDown} from '../redux/dices/dicesAction'
import {calcFourDown} from '../redux/dices/dicesAction'
import {calcFiveDown} from '../redux/dices/dicesAction'
import {calcSixDown} from '../redux/dices/dicesAction'
import {calcMaxDown} from '../redux/dices/dicesAction'
import {calcMinDown} from '../redux/dices/dicesAction'
import {calcThreeOfAKindDown} from '../redux/dices/dicesAction'
import {calcScaleDown} from '../redux/dices/dicesAction'
import {calcFullDown} from '../redux/dices/dicesAction'
import {calcPokerDown} from '../redux/dices/dicesAction'
import {calcYambDown} from '../redux/dices/dicesAction'



function DownColumn(props) {

  const [sum1_6, setsum1_6] = useState(0)
  const [sumMax_Min, setsumMax_Min] = useState('')
  const [sumBottom, setsumBottom] = useState('')

  useEffect(() => {
    let sum1_6Temp = 0;
    let sum1_6TempArr = [props.oneDown, props.twoDown, props.threeDown, props.fourDown, props.fiveDown, props.sixDown];
    for (let i = 0; i<sum1_6TempArr.length; i++){
      if(typeof sum1_6TempArr[i] === 'number'){
        sum1_6Temp = sum1_6Temp + sum1_6TempArr[i]
      }else{continue}
    }
    if(sum1_6Temp === 0){
      setsum1_6('')
    
    }
    else if(sum1_6Temp > 59){
      sum1_6Temp =  sum1_6Temp + 30; // adds bonus
      setsum1_6(sum1_6Temp)
      
    }
    else{
    setsum1_6(sum1_6Temp)
    
    
    }

    if(typeof props.minDown === 'number' && typeof props.oneDown === 'number' && typeof props.maxDown === 'number' ){
    setsumMax_Min((props.maxDown - props.minDown) * props.oneDown)} // if no value is entered (not a number) should not calculate the sum.

    let sumBottom = 0;
    let sumBottomTempArr = [props.ThreeOfAKindDown, props.scaleDown, props.fullDown, props.pokerDown, props.yambDown];
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
  }, [props.oneDown, props.twoDown, props.threeDown, props.fourDown, props.fiveDown, props.sixDown, props.maxDown, props.minDown, props.ThreeOfAKindDown, props.scaleDown, props.fullDown, props.pokerDown, props.yambDown])

  useEffect(() => {
    props.getSum1_6Down(sum1_6);
    props.getSumMax_MinDown(sumMax_Min);
    props.getSumBottomDown(sumBottom);
    }, [sum1_6, sumMax_Min, sumBottom, props])
  


  return (
          <div className={ props.mustUseFiveDices ? 'downColumn freezeBackground' : 'downColumn'}>
    <div className='cellBorder'><b>Down</b></div>
    <div onClick={() => {props.calcOneDown(props.calcOne)}} column="down" className={props.oneDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.oneDown}</b></div> 
    <div onClick={() => {props.calcTwoDown(props.calcTwo)}} column="down" className={props.twoDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.twoDown}</b></div>
    <div onClick={() => {props.calcThreeDown(props.calcThree)}} column="down" className={props.threeDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.threeDown}</b></div>
    <div onClick={() => {props.calcFourDown(props.calcFour)}} column="down" className={props.fourDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fourDown}</b></div>
    <div onClick={() => {props.calcFiveDown(props.calcFive)}} column="down" className={props.fiveDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fiveDown}</b></div>
    <div onClick={() => {props.calcSixDown(props.calcSix)}} column="down" className={props.sixDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.sixDown}</b></div>
    <div className='sumBackground cellBorder'><b>{sum1_6}</b></div>
    <div onClick={() => {props.calcMaxDown(props.calcMax)}} column="down" className={props.maxDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.maxDown}</b></div>
    <div onClick={() => {props.calcMinDown(props.calcMin)}} column="down" className={props.minDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.minDown}</b></div>
    <div className='sumBackground cellBorder'><b>{sumMax_Min}</b></div>
    <div onClick={() => {props.calcThreeOfAKindDown(props.calcThreeOfAKind)}} column="down" className={props.ThreeOfAKindDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.ThreeOfAKindDown}</b></div>
    <div onClick={() => {props.calcScaleDown(props.calcScale)}} column="down" className={props.scaleDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.scaleDown}</b></div>
    <div onClick={() => {props.calcFullDown(props.calcFull)}} column="down" className={props.fullDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fullDown}</b></div>
    <div onClick={() => {props.calcPokerDown(props.calcPoker)}} column="down" className={props.pokerDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.pokerDown}</b></div>
    <div onClick={() => {props.calcYambDown(props.calcYamb)}} column="down" className={props.yambDownPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.yambDown}</b></div>
    <div className='sumBackground cellBorder'><b>{sumBottom}</b></div>
        </div>

  )
}

const mapStateToProps = (state) => {
  return {
      oneDown: state.dices.oneDown,
      oneDownPermanentlyMute: state.dices.oneDownPermanentlyMute,
      twoDown: state.dices.twoDown,
      twoDownPermanentlyMute: state.dices.twoDownPermanentlyMute,
      threeDown: state.dices.threeDown,
      threeDownPermanentlyMute: state.dices.threeDownPermanentlyMute,
      fourDown: state.dices.fourDown,
      fourDownPermanentlyMute: state.dices.fourDownPermanentlyMute,
      fiveDown: state.dices.fiveDown,
      fiveDownPermanentlyMute: state.dices.fiveDownPermanentlyMute,
      sixDown: state.dices.sixDown,
      sixDownPermanentlyMute: state.dices.sixDownPermanentlyMute,

      maxDown: state.dices.maxDown,
      maxDownPermanentlyMute: state.dices.maxDownPermanentlyMute,
      mustUseFiveDices: state.dices.mustUseFiveDices,
      minDown: state.dices.minDown,
      minDownPermanentlyMute: state.dices.minDownPermanentlyMute,

      ThreeOfAKindDown: state.dices.ThreeOfAKindDown,
      ThreeOfAKindDownPermanentlyMute: state.dices.ThreeOfAKindDownPermanentlyMute,
      scaleDown: state.dices.scaleDown,
      scaleDownPermanentlyMute: state.dices.scaleDownPermanentlyMute,
      fullDown: state.dices.fullDown,
      fullDownPermanentlyMute: state.dices.fullDownPermanentlyMute,
      pokerDown: state.dices.pokerDown,
      pokerDownPermanentlyMute: state.dices.pokerDownPermanentlyMute,
      yambDown: state.dices.yambDown,
      yambDownPermanentlyMute: state.dices.yambDownPermanentlyMute,

     
 

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calcOneDown: (calcOne) => dispatch(calcOneDown(calcOne)),
    calcTwoDown: (calcTwo) => dispatch(calcTwoDown(calcTwo)),
    calcThreeDown: (calcThree) => dispatch(calcThreeDown(calcThree)),
    calcFourDown: (calcFour) => dispatch(calcFourDown(calcFour)),
    calcFiveDown: (calcFive) => dispatch(calcFiveDown(calcFive)),
    calcSixDown: (calcSix) => dispatch(calcSixDown(calcSix)),

    calcMaxDown: (calcMax) => dispatch(calcMaxDown(calcMax)),
    calcMinDown: (calcMin) => dispatch(calcMinDown(calcMin)),
  
    calcThreeOfAKindDown: (calcThreeOfAKind) => dispatch(calcThreeOfAKindDown(calcThreeOfAKind)),
    calcScaleDown: (calcScale) => dispatch(calcScaleDown(calcScale)),
    calcFullDown: (calcFull) => dispatch(calcFullDown(calcFull)),
    calcPokerDown: (calcPoker) => dispatch(calcPokerDown(calcPoker)),
    calcYambDown: (calcYamb) => dispatch(calcYambDown(calcYamb)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DownColumn) 
