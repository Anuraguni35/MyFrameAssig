import React from 'react'
import "./statusbar.css"

export default function StatusBar() {
  return (
    <div className='statusBar'>
       <p className='Last30'>Last 30 days:</p>
       <div className='outerPaidTag'>
       <div className='PaidTag'>
        <span className='tagsName' >PAID</span><span>€24000</span>
       </div>
       <div className='PendingTag'>
       <span className='tagsName'>PENDING</span><span>€41000</span>
       </div>
       <div className='OverDueTag'>
       <span className='tagsName'>OVERDUE</span><span>€65600</span>
       </div>
       </div>
    </div>
  )
}
