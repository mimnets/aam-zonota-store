import React from 'react';
import ('./Product.css');

const Product = ({product}) => {
    const {images, title, description, brand, price, rating, id} = product;

    const addToCart = (id) =>{
        console.log('button clicked', id)
    }
    return (
        <div className='product'>
            <img src={images[0]} alt=""/>
            <h4>Model: {title}</h4>
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <p>Brand: {brand}</p>
            <p>Rating: {rating}</p>
            <div>
                <button onClick={() => addToCart(id)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;