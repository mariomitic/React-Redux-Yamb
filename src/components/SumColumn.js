import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
//import './MainStyle.css'

function SumColumn(props) {

const [sumTotal1_6, setsumTotal1_6] = useState('');
const [sumTotalMax_Min, setsumTotalMax_Min] = useState('');
const [sumTotalBottom, setsumTotalBottom] = useState('');

const [sumTotalAll, setsumTotalAll] = useState('');
const [ engGameMessage, setengGameMessage] = useState(false);




useEffect(() => {
   let sumTotal1_6 = 0;
   let sumTotal1_6Arr = [props.sum1_6Down, props.sum1_6Free, props.sum1_6Up, props.sum1_6Call, props.sum1_6Hand];
   for(let i = 0; i<sumTotal1_6Arr.length; i++){
   if(sumTotal1_6Arr[i] === ''){
      continue
   }else{
         sumTotal1_6 = sumTotal1_6 + sumTotal1_6Arr[i]
         setsumTotal1_6(sumTotal1_6)
   }
   if(sumTotal1_6 === 0){
      setsumTotal1_6('')
   }
}
   let sumTotalMax_Min = 0;
   let sumTotalMax_MinArr = [props.sumMax_MinDown, props.sumMax_MinFree, props.sumMax_MinUp, props.sumMax_MinCall, props.sumMax_MinHand]
   for(let i = 0; i<sumTotalMax_MinArr.length; i++){
      if(sumTotalMax_MinArr[i] === ''){
         continue
      }else{
            sumTotalMax_Min = sumTotalMax_Min + sumTotalMax_MinArr[i]
            setsumTotalMax_Min(sumTotalMax_Min)
      }
      if(sumTotalMax_Min === 0){
         setsumTotalMax_Min('')
      }
   }
   
   let sumTotalBottom = 0;
   let sumTotalBottomArr = [props.sumBottomDown, props.sumBottomFree, props.sumBottomUp, props.sumBottomCall, props.sumBottomHand]

   for(let i = 0; i<sumTotalBottomArr.length; i++){
      if(sumTotalBottomArr[i] === ''){
         continue
      }else{
            sumTotalBottom = sumTotalBottom + sumTotalBottomArr[i]
            setsumTotalBottom(sumTotalBottom)
      }
   }

   setsumTotalAll(sumTotal1_6 + sumTotalMax_Min + sumTotalBottom)
   if(sumTotal1_6 + sumTotalMax_Min + sumTotalBottom === 0){
      setsumTotalAll('')
   }

}, [props.sum1_6Down, props.sum1_6Free, props.sum1_6Up, props.sum1_6Call, props.sum1_6Hand,
   props.sumMax_MinDown, props.sumMax_MinFree, props.sumMax_MinUp, props.sumMax_MinCall, props.sumMax_MinHand,
   props.sumBottomDown, props.sumBottomFree, props.sumBottomUp, props.sumBottomCall, props.sumBottomHand,
])

useEffect(() => {
   if(props.numberFieldsLeftDownFreeUp === 0 && props.numberFieldsLeftCallHand === 0) {
      setengGameMessage(true);}
   }, [props.numberFieldsLeftDownFreeUp, props.numberFieldsLeftCallHand])

  return (
<div>
   {engGameMessage && (
      <div className='endGame'>
        <h2>You final score is</h2>
        <h2>{sumTotalAll}</h2>
        <button onClick={() => window.location.reload()} className='ok_btn'><b>Play Agian</b></button>
      </div>
    )}
 
        <div className='sumColumn'>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
     <div className='sumBackground cellBorder'><b>{sumTotal1_6}</b></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
     <div className=' sumBackground cellBorder'><b>{sumTotalMax_Min}</b></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
     <div className='sumBackground cellBorder'><b>{sumTotalBottom}</b></div>
     <div className='sumBackground cellBorder'><b>{sumTotalAll}</b></div>
     </div>
     </div>
   
  )
}


const mapStateToProps = (state) => {
   return {
     
   
     numberFieldsLeftDownFreeUp: state.dices.numberFieldsLeftDownFreeUp,
     numberFieldsLeftCallHand: state.dices.numberFieldsLeftCallHand,
 
   }
 }


export default connect(mapStateToProps)(SumColumn)


