import React from 'react';
import './product-row.style.css';

const ProductRow = (props) => {
    return(
        <div className="product-row-container">
            {
                props.product.stock === 0
                ?
                    <span className="product-without-stock">
                        {props.product.name}
                    </span>
                :
                    <span>{props.product.name} </span>
            }
            {' '} ${props.product.price}
        </div>
    );
}

export default ProductRow;