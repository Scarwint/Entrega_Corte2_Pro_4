import React, { useState } from 'react';
import './product-table.style.css';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';

const ProductTable = (props) => {

    console.log(props.productsList);

    const [category,setCategory] = useState('c1');
    const [nombre,setNombre] = useState();
    const [nota,setNota] = useState(0);
    const [sexo,setSexo] = useState();

    const addEstudiante = (event) => {
        event.preventDefault();
        console.log('Categoria :'+ category);
        console.log('Nombre :'+ nombre);
        console.log('Nota :'+ nota);
        console.log('Genero :'+ sexo);
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
                                            product={product}
                                        />
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
                                    Programa
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select value={category} 
                                        onChange={(event)=>{
                                            console.log(event.target.value);
                                            setCategory(event.target.value);
                                        }}>
                                        <option value="c1">Programacion 1</option>
                                        <option value="c2">Español</option>
                                        <option value="c3">Biologia</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Nombre</td>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                        type="text" 
                                        value={nombre} 
                                        onChange={(event)=>{
                                            console.log(event.target.value);
                                            setNombre(event.target.value);
                                        }}>
                                    </input>
                                </td>
                            </tr>
                            <tr>
                                <td>Nota</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="number"
                                            value={nota}  
                                            onChange={(event)=>{
                                                setNota(event.target.value);
                                            }}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Sexo</td>
                            </tr>
                            <tr>
                                <td>
                                    <select value={sexo} 
                                        onChange={(event)=>{
                                            setSexo(event.target.value);
                                            console.log(event.target.value);
                                        }}>
                                        <option value="">Seleccionar genero</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br/>
                                    <button onClick={addEstudiante}>Adicionar estudiante</button>
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