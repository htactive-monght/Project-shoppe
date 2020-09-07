import React, { useState, useEffect } from 'react';
import { database, auth } from '../../firebase/Index';
import { Modal, Row, Col, Button, Menu } from 'antd';
import Register from '../Register'
import { Redirect, Link } from 'react-router-dom';
import HomePage from './Homepage';



function Checkout(props) {
    const { order, totalPrice } = props.location.paramsOrder;
    const [nameCustomer, setNameCustomer] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [userDB, setUserDB] = useState("");
    const [currentUser, setUser] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged(userss => {
            setUser(userss);
            const userID = userss.uid;
            var rootRef = database.ref('users/' + userID);
            rootRef.once('value')
                .then((snapshot) => {
                    var data = (snapshot.val() || 'null');
                    setUserDB(data);
                })
        });
    }, []);

    const payment = (name,email,phoneNumber,address) => { 
        if(currentUser.email===email){
            alert('Ok');
            [...order].map(item=>{
                    database.ref(`OrderProducts/${item.id}`).set({
                        nameCustomer: name,
                        productName: item.name,
                        price: item.price,
                        quantity: item.quantitys,
                        category: item.category,
                        avata: item.avata, 
                        email: email,
                        phoneNumber: phoneNumber,
                        address: address
                })
                setNameCustomer('')
                setEmail('')
                setAddress('')
                setPhoneNumber('')
            })
        }else{
            // <Link to='/Signin'></Link>
            console.log("Không thanh công nhé");
        }
       
    }

    return (
        <div >
            <Col>Thông tin hóa đơn</Col>
            {[...order].map((item) => {
                return (
                    <Row key={item.id}>
                        <Col span={4}><img width='60px' height='60px' src={item.avata} /></Col><br />
                        <Col span={4}>{item.name}</Col><br />
                        <Col span={5}>{item.quantitys}</Col><br />
                        <Col span={5}>{item.price}</Col><br />
                    </Row>
                )
            })
            }<br />
            <p>Tổng tiền: {totalPrice()}</p>

            <Col>Thông tin người mua</Col>
            <Row>
                <Col span={4}> Tên người mua: </Col>
                <Col span={10}>
                    <input type='name' value={nameCustomer} placeholder='Enter your name'
                        onChange={e => setNameCustomer(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col span={4}> Email người mua: </Col>
                <Col span={10}>
                    <input type='email' value={email} placeholder='Enter your email'
                        onChange={e => setEmail(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col span={4}> số điện thoại: </Col>
                <Col span={10}>
                    <input type='phone' value={phoneNumber} placeholder='Enter your phone number'
                        onChange={e => setPhoneNumber(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col span={4}> Địa chỉ nhận hàng: </Col>
                <Col span={10}>
                    <input type='address' value={address} placeholder='Enter your address'
                        onChange={e => setAddress(e.target.value)} />
                </Col>
            </Row>
            <button><Link to="/"></Link>Trở lại</button>
            <button 
            onClick={() => payment(nameCustomer, email, phoneNumber,address)}>
                Thanh toán</button>
        </div>

    )
}
export default Checkout;
