import React, { useState } from 'react';
import { database } from '../../firebase/Index';
import { Row, Col} from 'antd';
import { Link } from 'react-router-dom';


function Payment(props) {
    // const { array, totalPrice } = props.location.params;
    // const {array, totalPrice } = props;
    // const [nameCustomer, setNameCustomer] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState(""); 
    // const [address, setAddress] = useState("");
    // const userID = localStorage.getItem('KeyUser')


    // const order = (name,address,phone) =>{
    //     [...array].map((itemcart) =>{
    //         database.ref(`productOrder/${userID}`).set({
    //             userName: name,
    //             address: address,
    //             phone: phone,
    //             productOrder:{
    //                 avata: itemcart.avata, 
    //                 productName: itemcart.name,
    //                 price: itemcart.price,
    //                 quantity: itemcart.quantitys,
    //                 category: itemcart.category,
    //             }
    //         })
    //         setNameCustomer('')
    //         setAddress('')
    //         setPhoneNumber('')
    //     })
    // }

    return (
        <div >
            <Col>Thông tin hóa đơn</Col>
            {/* {[...array].map((item) => {
                return (
                    <Row key={item.id}>
                        <Col span={4}><img width='60px' height='60px' src={item.avata}/></Col><br />
                        <Col span={4}>{item.name}</Col><br />
                        <Col span={5}>{item.quantitys}</Col><br />
                        <Col span={5}>{item.price}</Col><br />
                    </Row>
                )
            })
            }<br />
            <p>Tổng tiền: {totalPrice()}</p> */}
            <Col>Thông tin người mua</Col>
           
            <button><Link to="/"></Link>Trở lại</button>
            <button>Đặt hàng</button>
            {/* <button onClick={() => order(nameCustomer, phoneNumber,address)}>Đặt hàng</button> */}
        </div>
    )
}
export default Payment;
