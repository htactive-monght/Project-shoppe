import React,{useState, useEffect} from 'react'
import FormCheckout  from './FormCheckout'
import { database } from '../../firebase/Index';
import {Redirect, Link} from 'react-router-dom'

function Checkout(){
  const [nameCustomer, setNameCustomer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [address, setAddress] = useState("");
  const [user, setUser] = useState({});
  useEffect(()=>{
    database.ref('users').on('value',(snapp)=>{
       setUser(snapp.val());
    })
  },[])

  return (
    <div>
      {user.address? <Link to='/Payment'></Link>: 
      <div>
         <FormCheckout 
          nameCustomer={nameCustomer} 
          setNameCustomer={setNameCustomer}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          address={address}
          setAddress={setAddress}
      />
      </div>
      }
    </div>
  )
}
export default Checkout;