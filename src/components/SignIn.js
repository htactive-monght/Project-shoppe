import React, { useState } from "react";
import { auth, database } from '../firebase/Index'
import './Style.css'
import { Redirect } from 'react-router-dom';
import Footer from '../components/webPage/Footer';
import Slider from '../components/webPage/Slider'
import '../App.css'
import { Row, Col, Input } from 'antd';
const { Search } = Input;
const sty = {
    color: 'orange',
    backgroundcolor: 'orangered',
    width: 700,
}

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInSuccess, SetSigInSuccess] = useState(false);
    const [signIndd, setSigIndd] = useState(false);
    const [user, setUser] = useState("");


    const signin = (email, password) => {
        if (email === 'admin@gmail.com' && password === 'admin1234') {
            SetSigInSuccess(true)
        } else {
            auth.signInWithEmailAndPassword(email, password)
                .then(res => backHomePage())
                .catch(err => console.log(err, "ko thành công"));
        }
    };

   
    if (signInSuccess) {
        return <Redirect to='/ProductsList' />
    }
    const backHomePage=()=>{
        setSigIndd(true);
    }
    if (signIndd) {
        return <Redirect to='/' />
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
                    <h2>Đăng Nhập</h2>
                    <input type='email' value={email} placeholder='Enter your email' onChange={e => setEmail(e.target.value)} /><br></br>
                    <input type='password' value={password} placeholder='Enter your password' onChange={e => setPassword(e.target.value)} /><br></br>
                    <button onClick={() => { signin(email, password) }}>ĐĂNG NHẬP</button>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>

    )
}
export default SignIn;