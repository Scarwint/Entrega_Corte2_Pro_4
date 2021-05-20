import React from 'react';
import SearchBar from '../search-bar/search-bar.comp';
import ProductTable from '../product-table/product-table.comp';
import './filterable-product-table.style.css';
const  FilterableProductTable = () => {
    return(
        <div className="filterable-product-table-container">
            <SearchBar/>
            <ProductTable/>
            {/*
            <ProductTable/>*/}
        </div>
    );
}

export default FilterableProductTable;