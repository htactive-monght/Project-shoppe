import React, { useState,useEffect } from 'react';
import { Row, Col, Input } from 'antd';
import { Redirect ,Link} from 'react-router-dom'
import { auth } from '../../firebase/Index'
import { database } from '../../firebase/Index'
import OrderProduct from './OrderProducts'

const { Search } = Input;
const sty = {
    color: 'orange'
}
function Header(props) {
    const [array, setArray] = useState([]);
    const userID = localStorage.getItem('KeyUser')

    const logout = () => {
        auth.signOut().then(function() {
            window.localStorage.setItem('KeyUser', '');
            window.localStorage.setItem('EmailUser', '');
            setArray([]);
          }, function(error) {
            alert('logout không thành công')          
          });
    }

    useEffect(() => {
        const cartProduct = database.ref(`/cart/${userID}`);
        cartProduct.on('value', snapshot => {
            const valueCart = snapshot.val();
            if (valueCart) {
                const objectListPr = Object.keys(valueCart).map(key => ({
                    ...valueCart[key],
                    id: key
                }));
                setArray(objectListPr)
            }
        });
    }, []);

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
                                <Link to="/Register"> Đăng ký </Link>  
                                <Link to="/SignIn"> Đăng nhập </Link>  
                                <a onClick={logout}>Đăng xuất</a>
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
                        <Col span={5}> <OrderProduct array={array}  {...useEffect}/></Col>
                        <Col span={6}> {array.length}</Col>
                    </Row>         
                </Col>
            </Row>
            
        </div>
    )
}
export default Header;

