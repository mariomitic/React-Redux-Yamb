import React, {useState} from 'react'
//import './MainStyle.css'


import MemoTable from './MemoTable'
import DownColumn from './DownColumn'
import FreeColumn from './FreeColumn'
import UpColumn from './UpColumn'
import CallColumn from './CallColumn'
import HandColumn from './HandColumn'
import SumColumn from './SumColumn'




 function Calculations(props) {

//return data from child sending function down as a prop, executing that function with needed data as its return
//(sending data up to parrent for all sums)
const [sum1_6Down, setsum1_6Down] = useState('');
const [sum1_6Free, setsum1_6Free] = useState('');
const [sum1_6Up, setsum1_6Up] = useState('');
const [sum1_6Call, setsum1_6Call] = useState('');
const [sum1_6Hand, setsum1_6Hand] = useState('');

const [sumMax_MinDown, setsumMax_MinDown] = useState('');
const [sumMax_MinFree, setsumMax_MinFree] = useState('');
const [sumMax_MinUp, setsumMax_MinUp] = useState('');
const [sumMax_MinCall, setsumMax_MinCall] = useState('');
const [sumMax_MinHand, setsumMax_MinHand] = useState('');

const [sumBottomDown, setsumBottomDown] = useState('');
const [sumBottomFree, setsumBottomFree] = useState('');
const [sumBottomUp, setsumBottomUp] = useState('');
const [sumBottomCall, setsumBottomCall] = useState('');
const [sumBottomHand, setsumBottomHand] = useState('');

const getSum1_6Down = (sumdata) => {
setsum1_6Down(sumdata)
  }
const getSum1_6Free = (sumdata) => {
  setsum1_6Free(sumdata)
    }
const getSum1_6Up = (sumdata) => {
  setsum1_6Up(sumdata)
    }
const getSum1_6Call = (sumdata) => {
  setsum1_6Call(sumdata)
    }
const getSum1_6Hand = (sumdata) => {
  setsum1_6Hand(sumdata)
    }

const getSumMax_MinDown = (sumdata) => {
  setsumMax_MinDown(sumdata)
    }
const getSumMax_MinFree = (sumdata) => {
  setsumMax_MinFree(sumdata)
    }
const getSumMax_MinUp = (sumdata) => {
  setsumMax_MinUp(sumdata)
    }
const getSumMax_MinCall = (sumdata) => {
  setsumMax_MinCall(sumdata)
    }
const getSumMax_MinHand = (sumdata) => {
  setsumMax_MinHand(sumdata)
    }
    
const getSumBottomDown = (sumdata) => {
  setsumBottomDown(sumdata)
    }
const getSumBottomFree = (sumdata) => {
  setsumBottomFree(sumdata)
    }
const getSumBottomUp = (sumdata) => {
  setsumBottomUp(sumdata)
    }
const getSumBottomCall = (sumdata) => {
  setsumBottomCall(sumdata)
    }
const getSumBottomHand = (sumdata) => {
  setsumBottomHand(sumdata)
    }


  const calcOne = () => {
    let scoreOne = 0;
    props.allKept.map(diceValue => {if(diceValue === 1) {scoreOne = scoreOne + diceValue}
    return scoreOne})
    if(scoreOne === 6){
      scoreOne = 5 //5 of a kind is maximum allowed
    }
    return scoreOne
  }

  const calcTwo = () => {
    let scoreTwo = 0;
    props.allKept.map(diceValue => {if(diceValue === 2) {scoreTwo = scoreTwo + diceValue}
    return scoreTwo})
    if(scoreTwo === 12){
      scoreTwo = 10
    }
    return scoreTwo
  }

  const calcThree = () => {
    let scoreThree = 0;
    props.allKept.map(diceValue => {if(diceValue === 3) {scoreThree = scoreThree + diceValue}
    return scoreThree})
    if(scoreThree === 18){
      scoreThree = 15
    }
    return scoreThree
  }

  const calcFour = () => {
    let scoreFour = 0;
    props.allKept.map(diceValue => {if(diceValue === 4) {scoreFour = scoreFour + diceValue}
    return scoreFour})
    if(scoreFour === 24){
      scoreFour = 20
    }
    return scoreFour
  }

  const calcFive = () => {
    let scoreFive = 0;
    props.allKept.map(diceValue => {if(diceValue === 5) {scoreFive = scoreFive + diceValue}
    return scoreFive})
    if(scoreFive === 30){
      scoreFive = 25
    }
    return scoreFive
  }

  const calcSix = () => {
    let scoreSix = 0;
    props.allKept.map(diceValue => {if(diceValue === 6) {scoreSix = scoreSix + diceValue}
    return scoreSix})
    if(scoreSix === 36){
      scoreSix = 30
    }
    return scoreSix
  }

  const calcMax = () => {
     let scoreMax = 0;
     if(props.allKept.sort()[1] === '') {return 'alert'} //alert to use 5 dices
     props.allKept.sort().shift();
     props.allKept.forEach(diceValue => {if(diceValue !== '') {scoreMax = scoreMax + parseInt(diceValue)}  })
     return scoreMax
     }

  const calcMin = () => {
    props.allKept.sort()
     let scoreMin = 0;
     if(props.allKept[1] === '') {return 'alert'}else{
        if(props.allKept[0] !== '') {
        props.allKept.reverse().shift()}
     props.allKept.forEach(diceValue => {if(diceValue !== '') {scoreMin = scoreMin + parseInt(diceValue)}})
     }
     return scoreMin
     }

  const calcThreeOfAKind = () => {
    let enterThreeOfAKind = 0;
    props.allKept.sort().reverse();
    if(props.allKept.length < 3 || props.allKept[0] === ''){ return enterThreeOfAKind}
    else if(props.allKept[0] === props.allKept[1] && props.allKept[1] === props.allKept[2]){
    enterThreeOfAKind = enterThreeOfAKind + props.allKept[0] + props.allKept[1] + props.allKept[2];}
    else if(props.allKept[1] === props.allKept[2] && props.allKept[2] === props.allKept[3]){
    enterThreeOfAKind = enterThreeOfAKind + props.allKept[1] + props.allKept[2] + props.allKept[3];}
    else if(props.allKept[2] === props.allKept[3] && props.allKept[3] === props.allKept[4]){
    enterThreeOfAKind = enterThreeOfAKind + props.allKept[2] + props.allKept[3] + props.allKept[4];}
    else if(props.allKept[3] === props.allKept[4] && props.allKept[4] === props.allKept[5]){
    enterThreeOfAKind = enterThreeOfAKind + props.allKept[3] + props.allKept[4] + props.allKept[5];}
    if(enterThreeOfAKind > 0) {
      enterThreeOfAKind = enterThreeOfAKind + 20
      }
    return enterThreeOfAKind
  }
    
  const calcScale = () => {
    let enterScale;
    props.allKept.sort();
    for (let i = 0; i<props.allKept.length; i++){
    if (props.allKept[i] === props.allKept[i+1] || props.allKept[i] === ''){
      props.allKept.splice([i], 1)}// removed duplicates or blanks from array
      }
      if(props.allKept.length < 5){
      enterScale = 0;
      return enterScale
      }else{
    if ((props.allKept[0] === 1 && props.allKept[1] === 2 && props.allKept[2] === 3 && props.allKept[3] === 4 && props.allKept[4] === 5) || 
        (props.allKept[0] === 2 && props.allKept[1] === 3 && props.allKept[2] === 4 && props.allKept[3] === 5 && props.allKept[4] === 6)){
    enterScale = 66
    return enterScale
        }else{enterScale = 0
        return enterScale}}
   }

   const calcFull = () => {
    let allKept = props.allKept;
    allKept.sort().reverse();
    let enterFull = 0;
    let three = [];
    let pair = [];
    if(allKept[4] === ''){
    enterFull = 0;
    return enterFull
    } else {
      for(let i=0; i<allKept.length; i++){

      if(allKept[i] === allKept[i+1] && allKept[i] === allKept[i+2]){
        three.push(allKept[i], allKept[i+1], allKept[i+2])
        allKept.splice([i], 3) // takes 3 same (of greater value) from array
      }
    }
        
      for(let i=0; i<allKept.length; i++){
      if(allKept[i] === allKept[i+1]){
        pair.push(allKept[i], allKept[i+1]) // takes pair from the rest of array
        allKept.splice([i], 2)
      }
        }
      }
        if(three.length === 0 || pair.length === 0 || three[0] === pair[0]){
          enterFull = 0;
          return enterFull
        }else{
        enterFull = 30 + three[0] + three[1] + three[2] + pair[0] + pair[1];
        return enterFull}

     }

    

    const calcPoker = () => {
      let enterPoker = 0;
      props.allKept.sort().reverse();
      if(props.allKept[0] === ''){ return enterPoker}
      else if(props.allKept[0] === props.allKept[1] && props.allKept[1] === props.allKept[2] && props.allKept[2] === props.allKept[3]){
      enterPoker = enterPoker + props.allKept[0] + props.allKept[1] + props.allKept[2] + props.allKept[3];}
      else if(props.allKept[1] === props.allKept[2] && props.allKept[2] === props.allKept[3] && props.allKept[3] === props.allKept[4]){
      enterPoker = enterPoker + props.allKept[1] + props.allKept[2] + props.allKept[3] + props.allKept[4];}
      else if(props.allKept[2] === props.allKept[3] && props.allKept[3] === props.allKept[4] && props.allKept[4] === props.allKept[5]){
      enterPoker = enterPoker + props.allKept[2] + props.allKept[3] + props.allKept[4] + props.allKept[5];}

      if(enterPoker > 0) {
        enterPoker = enterPoker + 40
        }else{enterPoker = 0}
      return enterPoker
    }

    const calcYamb = () => {
      let enterYamb = 0;
      props.allKept.sort().reverse();
      if(props.allKept[0] === ''){enterYamb = 0; return enterYamb}
      else if(props.allKept[0] === props.allKept[1] && props.allKept[1] === props.allKept[2] && props.allKept[2] === props.allKept[3] && props.allKept[3] === props.allKept[4]){
      enterYamb = enterYamb + props.allKept[0] + props.allKept[1] + props.allKept[2] + props.allKept[3] + props.allKept[4];}
      else if(props.allKept[1] === props.allKept[2] && props.allKept[2] === props.allKept[3] && props.allKept[3] === props.allKept[4] && props.allKept[5]){
      enterYamb = enterYamb + props.allKept[1] + props.allKept[2] + props.allKept[3] + props.allKept[4] + props.allKept[5];}

      if(enterYamb > 0) {
        enterYamb = enterYamb + 50
        }else{enterYamb = 0}
      return enterYamb
    }



  return (
    <div>
   
    <MemoTable />

    <DownColumn allKept={props.allKept} calcOne={calcOne} calcTwo={calcTwo} calcThree={calcThree} calcFour={calcFour} calcFive={calcFive} calcSix={calcSix} calcMax={calcMax} calcMin={calcMin} calcThreeOfAKind={calcThreeOfAKind} calcScale={calcScale} calcFull={calcFull} calcPoker={calcPoker} calcYamb={calcYamb} cellIsCalled={props.cellIsCalled} getSum1_6Down={getSum1_6Down} getSumMax_MinDown={getSumMax_MinDown} getSumBottomDown={getSumBottomDown}/>

    <FreeColumn allKept={props.allKept} calcOne={calcOne} calcTwo={calcTwo} calcThree={calcThree} calcFour={calcFour} calcFive={calcFive} calcSix={calcSix} calcMax={calcMax} calcMin={calcMin} calcThreeOfAKind={calcThreeOfAKind} calcScale={calcScale} calcFull={calcFull} calcPoker={calcPoker} calcYamb={calcYamb} cellIsCalled={props.cellIsCalled} getSum1_6Free={getSum1_6Free} getSumMax_MinFree={getSumMax_MinFree} getSumBottomFree={getSumBottomFree}/>

    <UpColumn allKept={props.allKept} calcOne={calcOne} calcTwo={calcTwo} calcThree={calcThree} calcFour={calcFour} calcFive={calcFive} calcSix={calcSix} calcMax={calcMax} calcMin={calcMin} calcThreeOfAKind={calcThreeOfAKind} calcScale={calcScale} calcFull={calcFull} calcPoker={calcPoker} calcYamb={calcYamb} cellIsCalled={props.cellIsCalled} getSum1_6Up={getSum1_6Up} getSumMax_MinUp={getSumMax_MinUp} getSumBottomUp={getSumBottomUp}/>

    <CallColumn allKept={props.allKept} calcOne={calcOne} calcTwo={calcTwo} calcThree={calcThree} calcFour={calcFour} calcFive={calcFive} calcSix={calcSix} calcMax={calcMax} calcMin={calcMin} calcThreeOfAKind={calcThreeOfAKind} calcScale={calcScale} calcFull={calcFull} calcPoker={calcPoker} calcYamb={calcYamb}
    calledcellId={props.calledcellId} cellIsCalled={props.cellIsCalled} getSum1_6Call={getSum1_6Call} getSumMax_MinCall={getSumMax_MinCall} getSumBottomCall={getSumBottomCall}/>

    <HandColumn allKept={props.allKept} calcOne={calcOne} calcTwo={calcTwo} calcThree={calcThree} calcFour={calcFour} calcFive={calcFive} calcSix={calcSix} calcMax={calcMax} calcMin={calcMin} calcThreeOfAKind={calcThreeOfAKind} calcScale={calcScale} calcFull={calcFull} calcPoker={calcPoker} calcYamb={calcYamb} cellIsCalled={props.cellIsCalled} getSum1_6Hand={getSum1_6Hand} getSumMax_MinHand={getSumMax_MinHand} getSumBottomHand={getSumBottomHand}/>

    <SumColumn
    sum1_6Down={sum1_6Down} sum1_6Free={sum1_6Free} sum1_6Up={sum1_6Up} sum1_6Call={sum1_6Call} sum1_6Hand={sum1_6Hand} sumMax_MinDown={sumMax_MinDown} sumMax_MinFree={sumMax_MinFree} sumMax_MinUp={sumMax_MinUp} sumMax_MinCall={sumMax_MinCall} sumMax_MinHand={sumMax_MinHand}
    sumBottomDown={sumBottomDown} sumBottomFree={sumBottomFree} sumBottomUp={sumBottomUp} sumBottomCall={sumBottomCall} sumBottomHand={sumBottomHand}/>
   
    </div>
  )
}



export default Calculations
