import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'

class Model extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        
                        const {modelOpen, closeModel} = value
                        const {id,title,img, price} = value.detailProduct
                        if(!modelOpen){
                            return null
                        } else {
                            return (
                            <ModelContainer>
                            <div className="container">
                                <div className="row">
                                    <div id='model' className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>Item added to the cart</h5>
                                        <img className='img-fluid' src={img} alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price: $ {price}</h5>
                                        <Link to='/' >
                                            <ButtonContainer onClick={() => closeModel()}>
                                                Products
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart' >
                                            <ButtonContainer cart onClick={() => closeModel()}>
                                                Add to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </ModelContainer>
                            )
                        }
                    }}
                </ProductConsumer>
            </div>
        );
    }
}

const ModelContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#model{
    background: var(--mainWhite)
}
`

export default Model;
