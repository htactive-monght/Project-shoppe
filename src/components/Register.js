import React, { useState } from "react";
import {firebaseAuth,database} from '../firebase/Index'
import './Style.css'
import {Redirect} from 'react-router-dom'
import Footer from'../components/webPage/Footer';
import Header from'../components/webPage/Header'
import Slider from'../components/webPage/Slider'
import '../App.css'


function  Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signOutSuccess, SetSignOutSuccess] = useState(false);
  
  const signup = ( email, password) => {
      if(email === '' || password ===''){
        alert("trống")
      }else{
        firebaseAuth.createUserWithEmailAndPassword(email,password)
        .then(user=>{
          const userId = firebaseAuth.currentUser.uid;
          database.ref(`users/${userId}`).set({
            email: email,
            password:password
          })
          setEmail("")
          setPassword("")
          SetSignOutSuccess(true)
        })
        .catch(err=>console.log(err))
      }
  }; 

  if(signOutSuccess){
    return <Redirect to='/SignIn'/>
  }
   return (

    <div className="contents">
            <div className="header">
                {/* <Header /> */}
            </div>
            <div className="slider">
                <Slider />
            </div>
            <div className="content">
            <div className='divForm'>
            <h2>Đăng ký</h2>
              <input type='email' value={email} placeholder='Enter your email' onChange={e=>setEmail(e.target.value)}/>
              <input type='password' value={password} placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}/>
              <button onClick = {() =>signup( email, password)}>TIẾP THEO</button>
            </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
     
  )
}

export default Register;
