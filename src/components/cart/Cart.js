import React, { Component } from 'react';
import Title from '../Title'
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context.js'
import CartList from './CartList';
import CartTotal from './CartTotal'


class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value
                        if(cart.length > 0){
                            return (
                                <div>
                                <Title  name={'Your'} title={'cart'} />
                                <CartColumn />
                                <CartList value={value} />
                                <CartTotal value={value} />
                                </div>
                            )
                        } else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;
