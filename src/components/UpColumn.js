import React, {useState, useEffect} from 'react'
import './MainStyle.css'
import { connect } from 'react-redux'
import {calcOneUp} from '../redux/dices/dicesAction'
import {calcTwoUp} from '../redux/dices/dicesAction'
import {calcThreeUp} from '../redux/dices/dicesAction'
import {calcFourUp} from '../redux/dices/dicesAction'
import {calcFiveUp} from '../redux/dices/dicesAction'
import {calcSixUp} from '../redux/dices/dicesAction'
import {calcMaxUp} from '../redux/dices/dicesAction'
import {calcMinUp} from '../redux/dices/dicesAction'
import {calcThreeOfAKindUp} from '../redux/dices/dicesAction'
import {calcScaleUp} from '../redux/dices/dicesAction'
import {calcFullUp} from '../redux/dices/dicesAction'
import {calcPokerUp} from '../redux/dices/dicesAction'
import {calcYambUp} from '../redux/dices/dicesAction'



function UpColumn(props) {

  const [sum1_6, setsum1_6] = useState(0)
  const [sumMax_Min, setsumMax_Min] = useState('')
  const [sumBottom, setsumBottom] = useState('')

  useEffect(() => {
    let sum1_6Temp = 0;
    let sum1_6TempArr = [props.oneUp, props.twoUp, props.threeUp, props.fourUp, props.fiveUp, props.sixUp];
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


    if(typeof props.oneUp === 'number'){
    setsumMax_Min((props.maxUp - props.minUp) * props.oneUp)}
    
    let sumBottom = 0;
    let sumBottomTempArr = [props.ThreeOfAKindUp, props.scaleUp, props.fullUp, props.pokerUp, props.yambUp];
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
  }, [props.oneUp, props.twoUp, props.threeUp, props.fourUp, props.fiveUp, props.sixUp, props.maxUp, props.minUp, props.ThreeOfAKindUp, props.scaleUp, props.fullUp, props.pokerUp, props.yambUp])

  useEffect(() => {
    props.getSum1_6Up(sum1_6)
    props.getSumMax_MinUp(sumMax_Min)
    props.getSumBottomUp(sumBottom);
  }, [sum1_6, sumMax_Min, sumBottom, props])

  return (
   
        <div className={ props.mustUseFiveDices ? 'upColumn freezeBackground' : 'upColumn'}>
    <div className='cellBorder'><b>Up</b></div>
    <div onClick={() => {props.calcOneUp(props.calcOne)}} column="up" className={props.oneUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.oneUp}</b></div>
    <div onClick={() => {props.calcTwoUp(props.calcTwo)}} column="up" className={props.twoUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.twoUp}</b></div>
    <div onClick={() => {props.calcThreeUp(props.calcThree)}} column="up" className={props.threeUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.threeUp}</b></div>
    <div onClick={() => {props.calcFourUp(props.calcFour)}} column="up" className={props.fourUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fourUp}</b></div>
    <div onClick={() => {props.calcFiveUp(props.calcFive)}} column="up" className={props.fiveUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fiveUp}</b></div>
    <div onClick={() => {props.calcSixUp(props.calcSix)}} column="up" className={props.sixUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.sixUp}</b></div>
    <div className='sumBackground cellBorder'><b>{sum1_6}</b></div>
    <div onClick={() => {props.calcMaxUp(props.calcMax)}} column="up" className={props.maxUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.maxUp}</b></div>
    <div onClick={() => {props.calcMinUp(props.calcMin)}} column="up" className={props.minUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.minUp}</b></div>
    <div className='sumBackground cellBorder'><b>{sumMax_Min}</b></div>
    <div onClick={() => {props.calcThreeOfAKindUp(props.calcThreeOfAKind)}} column="up" className={props.ThreeOfAKindUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.ThreeOfAKindUp}</b></div>
    <div onClick={() => {props.calcScaleUp(props.calcScale)}} column="up" className={props.scaleUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.scaleUp}</b></div>
    <div onClick={() => {props.calcFullUp(props.calcFull)}} column="up" className={props.fullUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.fullUp}</b></div>
    <div onClick={() => {props.calcPokerUp(props.calcPoker)}} column="up" className={props.pokerUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.pokerUp}</b></div>
    <div onClick={() => {props.calcYambUp(props.calcYamb)}} column="up" className={props.yambUpPermanentlyMute || props.cellIsCalled ? 'muted cellBorder' : 'clickable cellBorder'}><b>{props.yambUp}</b></div>
    <div className='sumBackground cellBorder'><b>{sumBottom}</b></div>
        </div>

    
  )
}


const mapStateToProps = (state) => {
  return {
    oneUp: state.dices.oneUp,
    oneUpPermanentlyMute: state.dices.oneUpPermanentlyMute,
    twoUp: state.dices.twoUp,
    twoUpPermanentlyMute: state.dices.twoUpPermanentlyMute,
    threeUp: state.dices.threeUp,
    threeUpPermanentlyMute: state.dices.threeUpPermanentlyMute,
    fourUp: state.dices.fourUp,
    fourUpPermanentlyMute: state.dices.fourUpPermanentlyMute,
    fiveUp: state.dices.fiveUp,
    fiveUpPermanentlyMute: state.dices.fiveUpPermanentlyMute,
    sixUp: state.dices.sixUp,
    sixUpPermanentlyMute: state.dices.sixUpPermanentlyMute,

    maxUp: state.dices.maxUp,
    maxUpPermanentlyMute: state.dices.maxUpPermanentlyMute,
    mustUseFiveDices: state.dices.mustUseFiveDices,
    minUp: state.dices.minUp,
    minUpPermanentlyMute: state.dices.minUpPermanentlyMute,

    ThreeOfAKindUp: state.dices.ThreeOfAKindUp,
    ThreeOfAKindUpPermanentlyMute: state.dices.ThreeOfAKindUpPermanentlyMute,
    scaleUp: state.dices.scaleUp,
    scaleUpPermanentlyMute: state.dices.scaleUpPermanentlyMute,
    fullUp: state.dices.fullUp,
    fullUpPermanentlyMute: state.dices.fullUpPermanentlyMute,
    pokerUp: state.dices.pokerUp,
    pokerUpPermanentlyMute: state.dices.pokerUpPermanentlyMute,
    yambUp: state.dices.yambUp,
    yambUpPermanentlyMute: state.dices.yambUpPermanentlyMute,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
       calcOneUp: (calcOne) => dispatch(calcOneUp(calcOne)),
       calcTwoUp: (calcTwo) => dispatch(calcTwoUp(calcTwo)),
       calcThreeUp: (calcThree) => dispatch(calcThreeUp(calcThree)),
       calcFourUp: (calcFour) => dispatch(calcFourUp(calcFour)),
       calcFiveUp: (calcFive) => dispatch(calcFiveUp(calcFive)),
       calcSixUp: (calcSix) => dispatch(calcSixUp(calcSix)),

       calcMaxUp: (calcMax) => dispatch(calcMaxUp(calcMax)),
       calcMinUp: (calcMin) => dispatch(calcMinUp(calcMin)),

       calcThreeOfAKindUp: (calcThreeOfAKind) => dispatch(calcThreeOfAKindUp(calcThreeOfAKind)),
       calcScaleUp: (calcScale) => dispatch(calcScaleUp(calcScale)),
       calcFullUp: (calcFull) => dispatch(calcFullUp(calcFull)),
       calcPokerUp: (calcPoker) => dispatch(calcPokerUp(calcPoker)),
       calcYambUp: (calcYamb) => dispatch(calcYambUp(calcYamb)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpColumn)  
