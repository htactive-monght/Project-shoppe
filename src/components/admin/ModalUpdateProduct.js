import { Modal, Row, Col, Input } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { database } from '../../firebase/Index'


function ModalUpdateProduct(props) {
    const [visible, setVisible] = useState(false);
    const { name, price, quantity, avata, proId, handleUpdate } = props;
    console.log(proId, "id nè");

    const [names, setValueNames] = useState(name);
    const [prices, setValuePrices] = useState(price);
    const [quantities, setValueQuantities] = useState(quantity);


    const showModal = () => {
        setVisible(true);
    };
    const handleOk = e => {
        handleUpdate(proId, names, prices, quantities);
        setVisible(false);
    }
    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };
    return (
        <div className="buttonUpdate">
            <button onClick={showModal}>Update product</button>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                title="UPDATE PRODUCT"
            >
                <div className="content">
                    <Row className="ac">
                        <Col span={12}>
                            <div className="card">
                                <h4>AVATA OF PRODUCTS</h4>
                                <img src={avata} width="100%"></img>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="card">
                                <div className="container">
                                    <h4> UPDATE INFOMATION</h4>
                                    <br />
                                    Product name:
                                    <Input
                                        placeholder="Type here for Product name"
                                        value={names}
                                        onChange={e => setValueNames(e.target.value)}
                                    />
                                    <p />
                                    Product price:
                                    <Input
                                        placeholder="Type here price"
                                        value={prices}
                                        onChange={e => setValuePrices(e.target.value)}
                                    />
                                    <p />
                                        Product quantity:
                                        <Input
                                        placeholder="Type here quantity"
                                        value={quantities}
                                        onChange={e => setValueQuantities(e.target.value)}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    );
}
export default ModalUpdateProduct;