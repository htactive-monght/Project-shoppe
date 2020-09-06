import React, { useState, useEffect } from 'react'
import { Menu, Row, Col,Input } from 'antd';
import './StylePrduct.css'
import { Redirect } from 'react-router-dom'
import { database,auth } from '../../firebase/Index'
import ModalUpdateProduct from './ModalUpdateProduct'

const { Search } = Input;
const sty = {
    color: 'orange',
    backgroundcolor: 'orangered',
    width: 650,
}
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
        auth.signOut()
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
                            <Menu style={{ width: 300, backgroundColor:'orange'}} mode="vertical">
                                <Menu.Item key="1">Users</Menu.Item>
                                <Menu.Item key="2">Products</Menu.Item>
                                <Menu.Item key="3">Categories</Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </Col>
                <Col span={18}>
                    <Row>
                        <div className="headeradmin"> 
                        <Row>
                        <Col span={5} >
                            <div className="divMenus">
                                <a>User Email</a>
                                <a>Home</a>
                            </div>
                        </Col>
                        <Col span={17} className="Searchss">
                            <div>
                               <Search className="Searchs" style={sty} placeholder="input search text"
                             onSearch={value => console.log(value)} enterButton/>
                            </div>
                        </Col>
                        <Col span={2} className="">
                            <button onClick={signOutUser}>Logout</button>  
                        </Col>
                        </Row>
                        </div>
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