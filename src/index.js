import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import ProductProvider from './context'
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <ProductProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ProductProvider>,
  document.getElementById('root')
);

