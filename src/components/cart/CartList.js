import React from 'react';
import CardItem from './CardItem';


const CartList = ({value}) => {
    const {cart} = value
    
    return (
        <div className='container-f'>
        {cart.map(item => {
        return (
            <CardItem key={item.id} item={item} value={value}  />
            )
        })}
        </div>
    );
}

export default CartList;
