import React from 'react';

const CardItem = ({value, item}) => {
    const {img,title,id,price,total,count} = item
    const {increment, decrement, removeItem} = value
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img className='img-fluid' src={img} alt="product" style={{width: '5rem', height: '5rem'}} />
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className='d-lg-none'>product: </span>
            {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
            <span className='d-lg-none'>product: </span>
            {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span onClick={() => decrement(id)} className='btn btn-black mx-1'>-</span>
                    <span className='btn btn-black mx-1'>{count}</span>
                    <span onClick={() => increment(id)} className='btn btn-black mx-1'>+</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <div onClick={() => removeItem(id)} className="cart-icon">
            <i className="fas fa-trash"></i>
            </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <strong>item total : ${total}</strong>
            </div>
        </div>
    );
}

export default CardItem;
