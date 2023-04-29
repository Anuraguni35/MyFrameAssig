import React from 'react'
import './ClientSec.css'
export default function ClientSec() {
  let data=[{client:"MadeByMack",send:"25",EndDate:"24-20-2024",interval:"3/month",amount:"€3000",id:1},
  {client:"MadeByMack",send:"25",EndDate:"24-20-2024",interval:"4/month",amount:"€3000",id:2},
  {client:"MadeByMack",send:"25",EndDate:"24-20-2024",interval:"1/month",amount:"€3000",id:3},
  {client:"MadeByMack",send:"25",EndDate:"24-20-2024",interval:"3/month",amount:"€3000",id:4},
  {client:"MadeByMack",send:"25",EndDate:"24-20-2024",interval:"5/month",amount:"€3000",id:5},
  {client:"MadeByMack",send:"25",EndDate:"24-20-2024",interval:"6/month",amount:"€3000",id:6},
  {client:"MadeByMack",send:"25",EndDate:"24-20-2024",interval:"1/month",amount:"€3000",id:7}
        ]
  return (
    <div className='Client_Sec'>
      <h1 className='Client_heading'>Per client</h1>
      <div>
        <input type="text" placeholder='Search client' className='Search_Bar'></input>
        <button className='Client_search_btn'>Search <i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div>
        <table className='Client_table'>
          <thead>
          <tr className='heading_clint_list'>
            <th className='Client_list_heading'>CLIENT</th>
             
            <th className='Client_list_heading'>#SEND</th>
             
            <th className='Client_list_heading'>END DATE</th>
             
            <th className='Client_list_heading'>INTERVAL</th>
             
            <th className='Client_list_heading'>AMOUNT</th>
             
            <th className='Client_list_heading'>EDIT</th>
           
          </tr>
          </thead>
          
          <tbody>
          
       {data.map(e=>{
        return(
           
         <tr className='List_Item_container' key={e.id}>
          <td className='List_logo_container list_items_decor'><div className='Client_sec_list_Logo'></div><div className='clinet_name'>{e.client}</div></td>
          <td className='list_items_decor'>{e.send}</td>
          <td className='list_items_decor'>{e.EndDate}</td>
          <td className='list_items_decor'>{e.interval}</td>
          <td className='list_items_decor'>{e.amount}</td>
          <td className='list_items_decor'><button className='editBtn'>Edit </button></td>
         </tr>)
       }) }
       </tbody>
       </table>
      </div>
    </div>
  )
}
