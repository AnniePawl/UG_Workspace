import React from 'react';
import './App.css';
import CheckoutForm from './CheckoutForm/CheckoutForm'
import Login from './Login/Login'
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <CheckoutForm />
      {/* <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Login />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
