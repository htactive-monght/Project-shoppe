import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { AudioOutlined,ShoppingCartOutlined} from '@ant-design/icons';
// import {BrowserRouter } from 'react-router-dom';
import { Redirect ,Link} from 'react-router-dom'

 
import OrderProduct from './OrderProducts'
const { Search } = Input;
const sty = {
    color: 'orange'
}
function Header(props) {
    const {cart, clearCart, deleteItemCart} = props;
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)

    const signInRedirect = () => {
        setSignIn(true)
    }
    if (signIn) {
        return <Redirect to='/SignIn' />
    }


    const signUpRedirect = () => {
        setSignUp(true)
    }
    if (signUp) {
        return <Redirect to='/Register'/>
    }
    return (
        <div className="contents_Header">
            <Row className="center">
                    <Col span={12} >
                    <div class="vertical-menu">
                        <a href="#home">Kênh người bán</a>
                        <a href="#home">Tải ứng dụng</a>
                        <a href="#home">Kết nối</a>
                        <a href="#home"> instagram</a>
                     </div>
                    </Col>
                    <Col span={12}>
                        <div className="center-top">
                            <div class="vertical-menu">
                                <a href="#home">Thông báo </a>
                                <a href="#home">Trợ giúp </a>
                                <a onClick={signUpRedirect}>Đăng ký </a>
                                {/* <a onClick={signInRedirect}>Đăng nhập </a> */}
                                <Link to="/SignIn"> Đăng nhập </Link>  
                         </div>
                        </div>
                    </Col>
            </Row>
            <Row className="center ">
                <Col span={6}><img className="logo" src="y-nghia-logo-shopee.jpg" width="200px" height="150px"></img></Col>
                <Col span={12}>
                    <Search style={sty} placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    <div class="vertical-menu">
                        <a href="#home">Đầm nữ </a>
                        <a href="#home">sandal nữ </a>
                        <a href="#home">Dép nam</a>
                        <a href="#home"> Dép nữ</a>
                        <a href="#home">Áo thể thao</a>
                        <a href="#home"> Áo dài </a>
                        <a href="#home">Mũ</a>
                        <a href="#home"> Giày thể thao </a>
                       
                    </div> 
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={5}> <OrderProduct order={cart} clearCart={clearCart} deleteItemCart={deleteItemCart}/></Col>
                        <Col span={6}> {[...cart].length}</Col>
                    </Row>         
                </Col>
            </Row>
            
        </div>
    )
}
export default Header;

