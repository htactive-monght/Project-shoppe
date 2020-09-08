import React, {component, useState } from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import Homepage from './components/webPage/Homepage'
import Register from './components/Register'
import SignIn from './components/SignIn'
import ProductsList from './components/admin/ProductsList'
import Addproducts from './components/admin/AddProducts'
import Payment from './components/webPage/Payment'
import FormCheckout from './components/webPage/FormCheckout'
import Checkout from './components/webPage/Checkout'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route  path= '/' exact component = {Homepage}/>
        <Route  path= '/Register' exact component = {Register}/> 
        <Route  path= '/SignIn' exact component = {SignIn}/> 
        <Route  path= '/ProductsList' exact component = {ProductsList}/>        
        <Route  path= '/Addproducts' exact component = {Addproducts}/> 
        <Route  path= '/Payment' exact component = {Payment}/> 
        <Route  path= '/Checkout' exact component = {Checkout}/> 
        <Route  path= '/FormCheckout' exact component = {FormCheckout}/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
