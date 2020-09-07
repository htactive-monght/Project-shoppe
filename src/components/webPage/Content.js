import React, { useState, useEffect } from 'react';
import './Content.css'
import { database } from '../../firebase/Index'
import { Row, Col } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Header from './Header';
import Slider from './Slider'


function Content() {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

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

    
    const addToCart = product =>{
        const userID = window.localStorage.getItem('KeyUser');
        const userEmail = window.localStorage.getItem('EmailUser');
        if(userID){
            let newArrayItem = [...cart];
            let quantityCart = newArrayItem.find((item)=>product.name === item.name);
            if(quantityCart){
                quantityCart.quantitys++;
            }else{
                quantityCart={
                    ...product,
                    quantitys: 1,
                    userEmail: userEmail,
                };
                newArrayItem.push(quantityCart);
            }
            setCart(newArrayItem);
        }else{
            alert('Chưa Đăng nhập tài khoản của bạn');
        }
    }
    // const addProductCart = ()=>{
    //     const userID = window.localStorage.getItem('KeyUser');
    //     var cartId = database.ref().child('cart').push().key;
    //     database.ref(`cart${cartId}`).set({
    //         userId: userID,
    //         listPro: {
    //             name: ,
    //             quantitys:,
    //             price: ,
    //             status: ,
    //         }
           
    //     })
    // }
  
    const deleteItemCart = (product) => {
        const id = product;
        setCart(cart.filter(item => item.id !== id));
    }

    const clearCart = ()=>{
        setCart([]);
    }
    return (
        <div>
             <div className="header">
                <Header cart = {cart}
                 clearCart= {clearCart} deleteItemCart={deleteItemCart}
                 />
            </div>
            
            <div className="slider">
                <Slider />
            </div>
        <div className="all_contents">
            <Row className="abc">
                {product.map(item => {
                    return (
                        <Col span={6} key={item.id}>
                            <div className="card ">
                                <img  className="img" src={item.avata} width="200px" height="150px"></img>
                                <div className="container">
                                    <h2>{item.name}</h2>
                                    <p>Price: {item.price}</p>
                                    <p><button class="button" onClick={()=>addToCart(item)}> add to cart <ShoppingCartOutlined/></button></p>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
        </div>
    )
}
export default Content;

