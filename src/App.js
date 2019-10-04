import React from 'react';
import './App.css';
import CheckoutForm from './CheckoutForm/CheckoutForm'
import Login from './Login/Login'
import ItemDetail from './ItemDetail/ItemDetail'
import Dashboard from './Dashboard/Dashboard'
import CheckoutHistory from './CheckoutHistory/CheckoutHistory'
import InventoryOverview from './InventoryOverview/InventoryOverview'
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        {/* Login Page */}
        <Route path="/login" exact component={Login} />


        {/* <CheckoutForm /> */}
        <Route path="/CheckoutForm" component={CheckoutForm} />


        {/* Link to Dashboard */}
        <Route path="/Dashboard" component={Dashboard} />


        {/* Inventory Overview Page */}
        <Route path='/InventoryOverview' component={InventoryOverview} />

        {/* Item Detail Page */}
        <Route path='/ItemDetail'
          component={ItemDetail}
        />

        {/* Checkout History Page */}
        <Route path='/CheckoutHistory'
          component={CheckoutHistory}
        />


      </BrowserRouter>
    </div>
  );
}

export default App;
