import React, { Component } from 'react';
import Title from '../Title'
import CartColumn from './CartColumn';

class Cart extends Component {
    render() {
        return (
            <section>
                <Title  name={'Your'} title={'cart'} />
                <CartColumn />
            </section>
        );
    }
}

export default Cart;
