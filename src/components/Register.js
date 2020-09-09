import React, { useState } from "react";
import {auth,database} from '../firebase/Index'
import './Style.css'
import { Row, Col, Input } from 'antd';
import {Redirect} from 'react-router-dom'
import Footer from'../components/webPage/Footer';
import Header from'../components/webPage/Header'
import Slider from'../components/webPage/Slider'
import '../App.css'
const { Search } = Input;
const sty = {
    color: 'orange',
    backgroundcolor: 'orangered',
    width: 700,
}


function  Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [backHome, setBackHome] = useState(false);
  
  const signup = ( email, password) => {
      if(email === '' || password ===''){
        alert("trống")
      }else{
        auth.createUserWithEmailAndPassword(email,password)
        .then(user=>{
          const userId = auth.currentUser.uid;
          database.ref(`users/${userId}`).set({
            email: email,
            username: '',
            phone: '',
            address: '',
          })
          setEmail("")
          setSignUpSuccess(true)
        })
        .catch(err=>console.log(err))
      }
  }; 

  if(signUpSuccess){
    return <Redirect to='/SignIn'/>
  }


  const backHomePage = ()=>{
    setBackHome(true);
  }
  if(backHome){
    return <Redirect to='/'/>
  }

   return (

    <div className="contents">
             <div className="headeradd">
                <Row className="center">
                    <Col span={5} className="logoadd">
                        <img onClick={()=>backHomePage()} className="logos" src="y-nghia-logo-shopee.jpg" width="200px" height="150px"></img>
                    </Col>
                    <Col span={19} >
                        <div class="vertical-menu">
                            <div className="addhearder">
                                <a href="#home"><Search style={sty} placeholder="input search text" onSearch={value => console.log(value)} enterButton /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
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
