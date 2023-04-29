import React from 'react'
import './MidSec.css'
import ClientSec from './ClientSec'
export default function MidSec() {
  return (
    <div>
      <div className='mid_Upper'>
        <h1 className='Mid_sec_heading'>Recurring Invoices</h1>
        <button className='Mid_sec_btn'>Add Recurring Invoices <i className="fa-solid fa-plus"></i></button>
      </div>
      <div className='mid_middle'>
        <div className='Mid_middle_box'>
           <div className='Mid_box_heading'>#RECURRING INVOICE</div>
           <div className='Mid_count'>215</div>
        </div>
        <div className='Mid_middle_box'> 
           <div className='Mid_box_heading'>RECURRING REVENUE</div>
           <div className='Mid_count' style={{display:'flex',marginLeft:'4vh'}}>€2500<div style={{fontSize:'0.5em',position:'relative',bottom:'-14px'}}>/Month</div></div>
        </div>
        <div className='Mid_middle_box'>
           <div className='Mid_box_heading'>RECURRING OVERDUE</div>
           <div className='Mid_count'>22</div>
        </div>
      </div>
      <ClientSec/>
    </div>
  )
}
