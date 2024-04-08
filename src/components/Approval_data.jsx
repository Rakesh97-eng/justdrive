import React from 'react'
import Approval from './Approval';


const Approval_data = () => {

 const cars = [
    {
        id:1,  
        name: "Suzuki Swift",
        type: "Hybrid",
        cost: 499,
        time: "hour",
        document: "Automobile documents verified",
        payment: "Payment completed",
        aadhar: "Aadhar Verified",
        approval: "Approved"
    },
    {
        id:2,  
        name: "Alto",
        type: "Hybrid",
        cost: 299,
        time: "hour",
        document: "Automobile documents verified",
        payment: "Payment completed",
        aadhar: "Aadhar Verified",
        approval: "Approved"
    }
 ];

  return (
    <div>
      <Approval Acars={cars}/>
      </div>
  )
}

export default Approval_data;