import React, { useState, useEffect } from "react";
import { database, storage } from '../../firebase/Index'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom'
import '../Style.css'
import Footer from'../webPage/Footer';
import '../../App.css'



function Addproducts() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [avata, setAvata] = useState(null);
    const [rollback, setRollBack] = useState(false)

    const Add = (name, price, quantity, category) => {
        var productId = database.ref().child('products').push().key;
        console.log(productId, 'id của product');
        database.ref(`products/${productId}`).set({
            name: name,
            price: price,
            quantity: quantity,
            category: category,
            avata: avata,
        });
        setName('')
        setPrice('')
        setQuantity('')
        setCategory('')
    }
    const handleImage = e => {
        if (e.target.files[0]) {
            setAvata(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        const upLoadTask = storage.ref(`images/${avata.name}`).put(avata);
        upLoadTask.on(
            "state_changed",
            snapshot => { },
            error => { console.log(error) },
            () => {
                storage.ref("images")
                .child(avata.name)
                .getDownloadURL()
                .then(url => {
                    setAvata(url)
                    console.log("url", url);
                })
                console.log("avata", avata);
            }
        )
    }

    const rollBack = () => {
        setRollBack(true)
    }

    if (rollback) {
        return <Redirect to='/ProductsList' />
    }

    return (

        <div className="contents">
        <div className="header">
            {/* <Header /> */}
        </div>
        
        <div>
            <ArrowLeftOutlined onClick={rollBack} />
            <div className='divForm'>
                <h2>ADD PRODUCTS</h2>
                <input type='text' value={name} placeholder='Enter your product name' onChange={e => setName(e.target.value)} /><br />
                <input type='number' value={price} placeholder='Enter your product price ' onChange={e => setPrice(e.target.value)} /><br />
                <input type='number' value={quantity} placeholder='Enter your product quantity' onChange={e => setQuantity(e.target.value)} /><br />
                <input type='text' value={category} placeholder='Enter your product category' onChange={e => setCategory(e.target.value)} /> <br />
                <input type='file' name='avata' onChange={handleImage} /><br/>
                <button onClick={handleUpload}>upload image</button><br /><br/>
                <button onClick={() => Add(name, price, quantity, category, avata)}>Nhập sản phẩm</button>
            </div>

        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
       
    )
}
export default Addproducts;