import React from 'react';
import SearchBar from '../search-bar/search-bar.comp';
import ProductTable from '../product-table/product-table.comp';
import './filterable-product-table.style.css';
import '../mis-tablas/mis-tablas.style.css';
import MisTablas from '../mis-tablas/mis-tablas.comp';

const  FilterableProductTable = (props) => {
    return(
        <div className="filterable-product-table-container">
            <SearchBar/>
            <ProductTable
                productsList={props.productsList}
            />
            {/*
                <div className="mis-tablas-direccion">
                <MisTablas
                    productsList={props.productsList}
                />
                </div>
            */}
            
        </div>
    );
}

export default FilterableProductTable;