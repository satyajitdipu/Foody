import React from 'react'
import image from '../7680241_3697355.jpg'
import '../component/order.scss'

function Orderid() {
  
    var array=JSON.parse(localStorage.getItem("orderItems"))
    var price=JSON.parse(localStorage.getItem("total"));
    var user=JSON.parse(localStorage.getItem("userg"))
  return (
    <div>
        <div><div className="row">
  <div className="col-4">
    <div id="simple-list-example " className="d-sm-xl-column gap-2 simple-list-example-scrollspy text-center">
    <img id='delivery' src={image} width='300px'/>
    </div>
  </div>
  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" >
      <h4 id="simple-list-item-1">OrderDetails</h4>
      
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Satus 
    <span className="badge bg-primary rounded-pill">Order pending</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Payment Mode
    <span className="badge bg-primary rounded-pill">Cash</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Deliver to:
    <span className="badge bg-primary rounded-pill">{user.address.street}</span>
  </li>
  
      <h4 id="simple-list-item-2">OrderSummary</h4>
      
        {array.map(list =>{
          return(
            <div key={list.id}>
              <li className="list-group-item d-flex justify-content-between align-items-center">
    {list.itemName}
    <span className="badge bg-primary rounded-pill">{list.quantity} * {list.price}</span>
  </li>
  
  

            </div>
          )
        })}
         <li className="list-group-item d-flex justify-content-between align-items-center">
    total
    <span className="badge bg-primary rounded-pill">{price}</span>
  </li>
      
    </div>
  </div>
</div></div>

    </div>
  )
}

export default Orderid