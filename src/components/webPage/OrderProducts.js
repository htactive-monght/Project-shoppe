import { Modal, Row, Col, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../../App.css';



function OrderProduct(props) {
    const [visible, setVisible] = useState(false);
    const {order} = props;
    console.log(order,"order cart");
    // const [orderPro, setOrderPro] = useState([order])

    const showModal = () => {
        setVisible(true);
    };
    const handleOk = e => {
        setVisible(false);
    }
    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };
    const deleteCart =(product)=>{
        [...order].filter(item => item.id!==product);
    }

  

    return (
        <div className="buttonUpdate">
            <ShoppingCartOutlined className='divIconCard'  onClick={showModal}/>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                title="Order Product"
            >
                <div>
                   {[...order].map(cartPro =>{
                       return( 
                           <div className=''>
                               <img width='100px' height='100px' src={cartPro.avata}/>
                               <p>{cartPro.name}</p>
                               <p>{cartPro.price}</p>
                               <button onClick={()=>deleteCart(cartPro)}>delete order</button>
                           </div>
                       )
                   })}
                </div>

            </Modal>
        </div>
    );
}
export default OrderProduct;