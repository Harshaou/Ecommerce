import React, { Component } from 'react';
// import Product from './Product';
import Title from './Title'

class ProductList extends Component {
    render() {
        return (
            <div className='py-5'>
                <div className="container">
                    <div className="row">
                        <Title name='Our' title='products' />
                    </div>
                </div>
                
            </div>
        );
    } 
}

export default ProductList;
