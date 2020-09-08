import React,{useState} from 'react'
import { Row, Col} from 'antd';
import { database } from '../../firebase/Index';
import {Redirect} from 'react-router-dom'


function FormCheckout(props){
const userID = localStorage.getItem('KeyUser')
const {  nameCustomer, setNameCustomer,phoneNumber,setPhoneNumber,address,setAddress} = props;
const [checkout,setCheckout ] = useState(false)


const saveInfor=(name,phone,address)=>{
  database.ref(`users/${userID}`).set({
    username: name,
    phone: phone,
    address: address
  })
  cometoCheckout();
}
const cometoCheckout = () => {
  setCheckout(true)
}

if (checkout) {
  return <Redirect to='/Payment'/>
}
  return (
    <div>
      <h2>Thông tin khách hàng</h2>
      <Row>
        <Col span={10}>
            <input type='name' value={nameCustomer} placeholder='Họ và Tên'
                onChange={e => setNameCustomer(e.target.value)} />
        </Col>
      </Row>
      <Row>
        <Col span={10}>
            <input type='phone' value={phoneNumber} placeholder='Số điện thoại'
                onChange={e => setPhoneNumber(e.target.value)} />
        </Col>
      </Row>
      <Row>
        <Col span={10}>
            <input type='address' value={address} placeholder='Địa chỉ'
                onChange={e => setAddress(e.target.value)} />
        </Col>
      </Row>
      <button onClick={()=>saveInfor(nameCustomer,phoneNumber,address)}>Hoàn thành</button>
    </div>
  )
}
export default FormCheckout;