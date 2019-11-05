import React from 'react';
import './App.css';
import CheckoutForm from './CheckoutForm/CheckoutForm'
import NewItemForm from './NewItemForm/NewItemForm.jsx'
import Login from './Login/Login'
import ItemDetail from './ItemDetail/ItemDetail'
import Dashboard from './Dashboard/Dashboard'
import CheckoutHistory from './CheckoutHistory/CheckoutHistory'
import InventoryOverview from './InventoryOverview/InventoryOverview'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />

        {/* Login Page */}
        <Route path="/login" exact component={Login} />


        {/* <CheckoutForm /> */}
        <Route path="/Checkout-Form" component={CheckoutForm} />

        {/* <NewItemForm /> */}
        <Route path="/New-Item-Form" exact component={NewItemForm} />


        {/* Link to Dashboard */}
        <Route path="/Dashboard" component={Dashboard} />


        {/* Inventory Overview Page */}
        <Route path='/Inventory-Overview' component={InventoryOverview} />

        {/* Item Detail Page */}
        <Route path='/Item-Detail'
          component={ItemDetail}
        />

        {/* Checkout History Page */}
        <Route path='/Checkout-History'
          component={CheckoutHistory}
        />


      </BrowserRouter>
    </div >
  );
}

export default App;
