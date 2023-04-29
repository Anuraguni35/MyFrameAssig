import React from 'react'
import './SideBar.css'
 
export default function SideBar() {
  return (
    <div className='SideBar'>
      <div className='sideBar_logo'>
        <button className='backBtn'><i className="fa-sharp fa-solid fa-arrow-left"></i></button>
          <div className='logo'></div>
      </div>
      <div className='List_items'>
        <ul>
          <li className='list_items'><i className="fa-solid fa-house"></i>  Home</li>
          <li className='list_items'><i className="fa-regular fa-file-lines"></i>  Invoice</li>
          <li className='list_items'><i className="fa-regular fa-address-card"></i>  Coustomers</li>
          <li className='list_items'><i className="fa-solid fa-box"></i>  Products</li>
          <li className='list_items'><i className="fa-solid fa-repeat"></i>  Recurring</li>
          <li className='list_items'><i className="fa-sharp fa-solid fa-tag"></i>  Discount</li>
        </ul>
      </div>
    </div>
  )
}
