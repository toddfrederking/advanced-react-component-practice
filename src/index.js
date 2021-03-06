import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

const {
  numberOfItemsInCart,
  products,
  cart
  } = state;


ReactDOM.render(
  <App 
    numberOfItemsInCart={numberOfItemsInCart}
    products={products}
    cart={cart}
  />,
  document.getElementById('root')
);
