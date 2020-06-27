import React, { Component } from 'react';
import {storeProducts, detailProduct} from './utill/data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state}}>
                 {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export const ProductConsumer = ProductContext.Consumer

export default ProductProvider
