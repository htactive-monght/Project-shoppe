import React, { useState, useEffect } from 'react';
import './Content.css'
import { database } from '../../firebase/Index'
import { Row, Col } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


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
        if(userID){
            let newArrayItem = [...cart];
            let quantityCart = newArrayItem.find((item)=>product.name === item.name);
            if(quantityCart){
                quantityCart.quantitys++;
            }else{
                quantityCart={
                    ...product,
                    quantitys: 1,
                };
                newArrayItem.push(quantityCart);
            }
            setCart(newArrayItem);
        }else{
            alert('Chưa Đăng nhập tài khoản của bạn');
        }
    }

    const tableCart = ()=>{
        const userID = window.localStorage.getItem('KeyUser');      
        cart.map(item=>{
            database.ref(`cart/${userID}/${item.id}`).set({
                avata:item.avata,
                name: item.name,
                quantitys:item.quantitys,
                price: item.price,
                category: item.category
          })
        })
    }
  
  
    return (
        <div>
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
                                    <p><button class="button" onClick={()=>{addToCart(item); tableCart()}}> add to cart <ShoppingCartOutlined/></button></p>
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

