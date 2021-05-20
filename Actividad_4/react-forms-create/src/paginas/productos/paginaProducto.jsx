import React, { useState } from 'react';
import FilterableProductTable from './componentes/filterable-product-table/filterable-product-table.comp';

const PaginaProducto = () => {

    let productsList = [
        {   
            id : 'c1',
            name:'Sporting Goods',
            products:[
                {
                    id : 'c1p1',
                    name:'football',
                    price : 49.99,
                    stock : 15
                },
                {
                    id : 'c1p2',
                    name:'Baseball',
                    price : 9.99,
                    stock : 20
                },
                {
                    id : 'c1p3',
                    name:'Basketball',
                    price : 9.99,
                    stock : 0
                }
            ]
         },
        {   
            id : 'c2',
            name:'Electronics',
            products:[
                {
                    id : 'c2p1',
                    name:'Ipod Touch',
                    price : 99.99,
                    stock : 6
                },
                {
                    id : 'c2p2',
                    name:'Iphone 5',
                    price : 399.99,
                    stock : 0
                },
                {
                    id : 'c2p3',
                    name:'Nexus 7',
                    price :199.99,
                    stock : 9
                }
            ]
        },
    ]

    const [products,setProducts]=useState(productsList);

    return(
        <FilterableProductTable 
            productsList={products}
            onAddproduct = {(newProductObj, categoryId)=>{
                //1. Crear nuevo arreglo de product
                const newProducts = [];
                for(let i=0; i<products.length;i++){
                    if(products[i].id !== categoryId){
                        newProducts.push(products[i]);
                        //products[i].products.push(productObj);
                    }else{
                        newProducts.push({...products[i],
                            products:[...products[i].products, newProductObj]
                        });
                    }
                }
                //2. Cambiar el arreglo products atraves de la funcion setProducts
                setProducts(newProducts);
                console.log(newProducts)
                console.log(categoryId)
                console.log(newProductObj)
            }}

        />
    );
}

export default PaginaProducto;



