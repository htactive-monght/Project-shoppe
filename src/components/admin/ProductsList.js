import React, { useState, useEffect } from 'react'
import { Menu, Row, Col } from 'antd';
import './StylePrduct.css'
import { Redirect } from 'react-router-dom'
import { firebaseAuth, database } from '../../firebase/Index'
import ModalUpdateProduct from './ModalUpdateProduct'


function Productlist() {
    const [signOutSuccess, SetSignOutSuccess] = useState(false);
    const [addPrdSuccess, SetAddPrdSuccess] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        let ref = database.ref('/products');
        ref.on('value', snapshot => {
            var state = snapshot.val();
            if (state) {
                const objectList = Object.keys(state).map(key => ({
                    ...state[key],
                    id: key
                }));
                setProduct(objectList)
            }
        });
    }, []);

    const updatePro = (proId, names, prices, quantities) => {
        const idKey = proId;
        database.ref('products').child(idKey).update({
            name: names,
            price: prices,
            quantity: quantities,
        });
    }

    const onDelete = (key) => {
        const idKey = key;
        database.ref('products').child(idKey).remove();
    }


    const signOutUser = () => {
        firebaseAuth.signOut()
            .then(res => {
                SetSignOutSuccess(true)
            })
    }
    if (signOutSuccess) {
        return <Redirect to='/' />
    }

    const addRedirect = () => {
        SetAddPrdSuccess(true)
    }
    if (addPrdSuccess) {
        return <Redirect to='/Addproducts' />
    }


    return (
        <div className='divManage'>
            <Row>
                <Col span={6} className="menuAdmin">
                    <div >
                        <div >
                            <h2>Danh Sách Quản Lý</h2>
                            <Menu style={{ width: 300 }} mode="vertical">
                                <Menu.Item key="1">Users</Menu.Item>
                                <Menu.Item key="2">Products</Menu.Item>
                                <Menu.Item key="3">Categories</Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </Col>
                <Col span={18}>
                    <Row>
                        <Col span={24} className="headerAdmin">
                            <div className='divMenu'>
                                <a>User Email</a>
                                <a><button onClick={signOutUser}>Logout</button></a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className='divDataMana'>
                                <div className='divTable'>
                                    <h2>Management Product</h2>
                                    <p></p>
                                    <button onClick={addRedirect}>Add</button>
                                    <table className='' >
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Image</th>
                                            <th colspan="3">Action</th>
                                        </tr>
                                        {product.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.name}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td><img width="60px" height="40px" src={item.avata} /></td>
                                                    <td>
                                                        <ModalUpdateProduct
                                                            handleUpdate={updatePro} proId={item.id} name={item.name} price={item.price}
                                                            quantity={item.quantity} avata={item.avata} proId={item.id}
                                                        />
                                                    </td>
                                                    <td><button onClick={() => onDelete(item.id)}>Delete</button></td>
                                                </tr>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default Productlist;