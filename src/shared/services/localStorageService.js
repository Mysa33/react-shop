import React from 'react';
import CartList from '../cart/cartList';

export class LocalStorageService  {
    
    data;
    arrayName;

    setLocalData(arrayName , data){

        this.arrayName = arrayName;
        this.data = data;
        console.log("Service is Called");

    }

    getLocalData(arrayName){
        
        this.arrayName = arrayName;
        console.log("Service is Called");

    }
        
}
