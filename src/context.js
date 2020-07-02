import React, { Component } from 'react';
import {storeProducts, detailProduct} from './utill/data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modelOpen: false,
        modelProduct: detailProduct,
        cartTotal: 0,
        cartSubTotal: 0,
        carTax: 0
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
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState({detailProduct: product })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        this.setState({products: tempProducts, cart: [...this.state.cart, product]})
    }

    openModal = (id) => {
        const product = this.getItem(id)
        this.setState({modelProduct: product, modelOpen: true})
    }

    closeModel = () => {
        this.setState({modelOpen: false})
    }

    increment = () => {
        this.setState({cartTotal: this.state.cartTotal +1 }, () => console.log(this.state.cartTotal))
    }

    decrement = () => {
        console.log('dec');
    } 

    removeItem = () => {
        console.log('remove');
    }

    clearCart = () => {
        console.log('remove');
    }

    render() {
        
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModel: this.closeModel,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
                }}
                >
                 {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export const ProductConsumer = ProductContext.Consumer

export default ProductProvider
