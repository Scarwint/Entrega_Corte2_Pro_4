import React from 'react';
import './product-category-row.style.css';

const ProductCategoryRow = (props) => {
    return(
        <div className="product-category-row-container">
            <div className="search-input">
                {props.categoryName}
            </div>
        </div>
    );
}

export default ProductCategoryRow ;