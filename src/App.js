import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import ProductsContent from './components/products/productsContent';

class App extends Component {

  componentDidMount() {
    
    var initCart = {
      'valid':false,
       'data':[],
       'total':0
    };
    var storageName = "Cart";
    var isExist = localStorage.getItem(storageName);
    if(isExist !== null){
      return;
    }else{
      localStorage.setItem(storageName, JSON.stringify(initCart));
    }
    
  }

  render() {
    return ( 
      <ProductsContent></ProductsContent>
    );
  }
}

export default App;
