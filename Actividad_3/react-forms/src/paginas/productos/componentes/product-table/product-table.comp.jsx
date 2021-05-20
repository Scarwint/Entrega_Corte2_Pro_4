import React, { useState } from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';
import './product-table.style.css';

const ProductTable = (props) => {
    const [category,setCategory] = useState('c1');
    const [name,setName] = useState();
    const [price,setPrice] = useState(0);
    const [stock,setStock] = useState(10);

    const addProduct = (event) => {
        event.preventDefault();
        const newProduct = {
            id : name,
            name: name,
            price : Number(price),  
            stock : Number(stock)
        }
        props.onAddproduct(newProduct,category);


        console.log('Categoria :'+ category);
        console.log('Nombre :'+ name);
        console.log('Precio :'+ price);
        console.log('Stock :'+ stock);
    }

    return(
        <div className="product-table-container">
            <div>
                {props.productsList.map((category, index)=>{
                    return (
                        <React.Fragment key = {category.id}>
                            <ProductCategoryRow categoryName={category.name}/>
                            {category.products.map((product,indexProduct)=>{
                                return(
                                    <ProductRow 
                                        key={product.id} 
                                        product={product}/>
                                );
                            })}
                        </React.Fragment>
                    );
                })}

            </div>

            <div>
                <form className="formguardar">
                    <table className="formguardar">
                        <tbody>
                            <tr>
                                <td>
                                    Category
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select value={category} 
                                        onChange={(event)=>{
                                            setCategory(event.target.value);
                                        }}>
                                        <option value="c1">Sporting Goods</option>
                                        <option value="c2">Electronics</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Name</td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="text" 
                                        value={name} 
                                        onChange={(event)=>{
                                            setName(event.target.value);
                                        }}>
                                    </input>
                                </td>
                            </tr>
                            <tr>
                                <td>Precio</td>
                            </tr>
                            <tr>
                                <td><input type="number"
                                        value={price}  
                                        onChange={(event)=>{
                                            setPrice(event.target.value);
                                        }}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>stock</td>
                            </tr>
                            <tr>
                                <td><input type="number" 
                                        value={stock}  
                                        onChange={(event)=>{
                                            setStock(event.target.value);
                                        }}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>
                                    <br/>
                                    <button onClick={addProduct}>Adicionar producto</button>
                                    <br/>
                                    <br/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>

    );
}

export default ProductTable;