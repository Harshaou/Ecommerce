import React, { Component } from 'react';
import {storeProducts, detailProduct} from './utill/data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }

    componentDidMount(){
        this.setProducts()
    }

    setProducts = () => {
        let newProducts = []
        storeProducts.forEach(item => {
            const singleItem = {...item}
            newProducts = [...newProducts, singleItem]
        })

        this.setState({products: newProducts})
    }

    getItem = (id) => {
        const product = this.state.products(item => item.id === id)
        return product
    }

    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState({detailProduct: product })
        console.log(this.state.detailProduct)
    }

    addToCart = () => {
        console.log('clicked mm');
        
    }

    render() {
        
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
                }}
                >
                 {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export const ProductConsumer = ProductContext.Consumer

export default ProductProvider
