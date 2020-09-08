import { Modal, Row, Col, Button, Menu } from 'antd';
import React, { useState, useEffect} from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { database } from '../../firebase/Index'
import 'antd/dist/antd.css';
import '../../App.css';
import './Order.css';
import {  Link } from 'react-router-dom'



function OrderProduct(props) {
    const [visible, setVisible] = useState(false);
    const { array } = props;
    const [edit, setEdit] = useState(true)
    const userID = localStorage.getItem('KeyUser')


    const showModal = () => {
        setVisible(true);
    };
    const handleOk = e => {
        setVisible(true);
        setEdit(false)
    }
    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };

    const totalPrice = () => {
        const total = array.reduce((sum, { price, quantitys }) => parseInt(sum) + parseInt(price) * quantitys, 0);
        return total;
    }

 

    const deleteItemCart = (product) => {
        const id = product;
        database.ref(`cart/${userID}`).child(id).remove();
    }

    const clearCart = ()=>{
        database.ref(`cart/${userID}`).remove();    
    }

    return (
        <div className="buttonUpdate">
            <ShoppingCartOutlined className='divIconCard' onClick={showModal} />
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                title="Order Product"
            >
                <div className="Contents">
                    {edit ?
                        <div>
                            <Row>
                                <Col span={12} >
                                    <div className="Headermodal1">
                                        <Button><Link to="/"> Add New Product</Link></Button>
                                    </div>
                                </Col>
                                <Col span={12} className="Headermodal2">
                                    <div className="Headermodal2">
                                        <Button onClick={() => clearCart()}> clear cart</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="Contentitems">
                                <Col span={4}>
                                    <div className="Contentitem">
                                        Avata
                            </div>
                                </Col>
                                <Col span={4}>
                                    <div className="Contentitem">
                                        Name
                            </div>
                                </Col>
                                <Col span={5}>
                                    <div className="Contentitem">
                                        Price
                            </div>
                                </Col>
                                <Col span={4}>
                                    <div className="Contentitem">
                                        Quantity
                            </div>
                                </Col>
                                <Col span={4}>
                                    <div className="Contentitem">
                                        subtotal
                            </div>
                                </Col>
                                <Col span={2}>
                                    <div className="Contentitem">
                                        delete
                            </div>
                                </Col>
                            </Row>
                            {array.map(cartPro => {
                                return (
                                    <Row key={cartPro.id}>
                                        <Col span={4}><img width='60px' height='60px' src={cartPro.avata} /></Col><br />
                                        <Col span={4}>{cartPro.name}</Col><br />
                                        <Col span={5}>{cartPro.price}</Col><br />
                                        <Col span={5}>
                                            <button>+</button>
                                            {cartPro.quantitys}
                                            <button>-</button>
                                        </Col><br />
                                        <Col span={4}></Col><br />
                                        <Col span={2}><button onClick={() => deleteItemCart(cartPro.id)}>x</button></Col><br />
                                    </Row>
                                )
                        })
                            }<br />
                            {/* <Link to={{pathname: '/Checkout', params:{array, totalPrice}}}> Checkout your product</Link> */}
                            <Link to='/Checkout'>Mua hàng</Link>
                            <Row className="bottom">
                                <Col span={12}>
                                    <div className="Headermodal1">
                                        Total:
                            </div>
                                </Col>
                                <Col span={12} className="Headermodal2">
                                    <div className="Headermodal2">
                                        {totalPrice()}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        :
                        <div>
                            <p>hiện thị checkout</p>
                        </div>
                    }
                </div>

            </Modal>

        </div>
    );
}
export default OrderProduct;