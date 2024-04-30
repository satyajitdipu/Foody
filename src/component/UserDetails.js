import React from 'react'
import '../component/user.scss'

function UserDetails() {
  const array=JSON.parse(localStorage.getItem("userg"))
  return (
    <div className="card card2 text-center d-flex center">
    <div className="card-header">
      User Details
    </div>
    <div className="card-body user">
      <h5 className="card-title">Name : {array.name}</h5>
      <p className="card-text">Id : {array.id}</p>
      <p className="card-text">Username : {array.username}</p>
      <p className="card-text">email : {array.email}</p>
      <p className="card-text">street : {array.address.street} ,{array.address.suite},{array.address.city},zip:-{array.address.zipcode}</p>
      <p className="card-text"> longitude and latitude :{array.address.geo.lat} ,{array.address.geo.lng} </p>
      <p className="card-text">Phone : {array.phone}</p>
      <p className="card-text">website : {array.website}</p>
      <p className="card-text">company Name : {array.company.name}</p>
      <p className="card-text">company catchPharse : {array.company.catchPhrase}</p>
      <p className="card-text">company bs : {array.company.bs}</p>
    </div>
    
    </div>
  )
}

export default UserDetails