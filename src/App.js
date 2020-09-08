import React, {component, useState } from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import Homepage from './components/webPage/Homepage'
import Register from './components/Register'
import SignIn from './components/SignIn'
import ProductsList from './components/admin/ProductsList'
import Addproducts from './components/admin/AddProducts'
import Checkout from './components/webPage/Checkout'
import DetailProduct from './components/webPage/DetailProduct';


function App() {
  // const [user , setUser] = useState("");

  // const componentDidMount=()=>{
  //   authListener();
  // }
  // const authListener=()=>{
  //   firebaseAuth.auth().onAuthStateChange((user)=>{
  //     if(user){
  //       setUser({user});
  //     }
  //     else{
  //       setUser({user: null});
  //     }
  //   })
  // }


  return (
   
    <div>
       {/* {user? (<ProductsList />):(<SignIn/>)}; */}
      <BrowserRouter>
        <Route  path= '/' exact component = {Homepage}/>
        <Route  path= '/Register' exact component = {Register}/> 
        <Route  path= '/SignIn' exact component = {SignIn}/> 
        <Route  path= '/ProductsList' exact component = {ProductsList}/>        
        <Route  path= '/Addproducts' exact component = {Addproducts}/> 
        <Route  path= '/Checkout' exact component = {Checkout}/> 
        <Route  path= '/DetailProduct' exact component = {DetailProduct}/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
