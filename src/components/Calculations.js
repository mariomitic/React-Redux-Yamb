import React from 'react'
import './MainStyle.css'

import MemoTable from './MemoTable'//fix it
import DownColumn from './DownColumn'
import FreeColumn from './FreeColumn'
import UpColumn from './UpColumn'
import CallColumn from './CallColumn'
import HandColumn from './HandColumn'
import SumColumn from './SumColumn'




function Calculations() {



  return (
    <div>
   
    <MemoTable />
    <DownColumn />
    <FreeColumn />
    <UpColumn />
    <CallColumn />
    <HandColumn />
    <SumColumn />
   
    </div>
  )
}

export default Calculations
