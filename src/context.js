import React, { Component } from 'react';
import {storeProducts, detailProduct} from './util/data'

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
        cartTax: 0
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
        this.setState({products: tempProducts, cart: [...this.state.cart, product]}, () => this.addTotals())
    }

    openModal = (id) => {
        const product = this.getItem(id)
        this.setState({modelProduct: product, modelOpen: true})
    }

    closeModel = () => {
        this.setState({modelOpen: false})
    }

    increment = (id) => {
        let tempCart = [...this.state.cart]
        let selectedProduct = tempCart.find(item => item.id == id)
        let index = tempCart.indexOf(selectedProduct)
        let product = tempCart[index]

        product.count = product.count +1
        product.total = product.price * product.count

        this.setState({cart: tempCart}, () => this.addTotals())
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        let selectedProduct = tempCart.find(item => item.id == id)
        let index = tempCart.indexOf(selectedProduct)
        let product = tempCart[index]

        product.count = product.count -1
        if(product.count === 0 ){
            this.removeItem(id)
        } else {
            product.total = product.price * product.count
            this.setState({cart: tempCart}, () => this.addTotals())
        }
        
    } 

    removeItem = (id) => {
       let tempProducts = [...this.state.products]
       let filterdCart =  this.state.cart.filter(item => item.id !== id )
       let index = tempProducts.indexOf(this.getItem(id))
       let removedProduct = tempProducts[index]
       removedProduct.inCart = false
       removedProduct.count = 0
       removedProduct.total = 0

       this.setState({cart: filterdCart, products: tempProducts}, () => this.addTotals())
       
    }

    clearCart = () => {
        this.setState({cart: []})
        this.setProducts()
        this.addTotals()
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState({cartSubTotal: subTotal, cartTax: tax, cartTotal: total})
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
