import React, { useState } from 'react';
import './product-table.style.css';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';

const ProductTable = (props) => {

    console.log(props.productsList);

    const [category,setCategory] = useState('c1');
    const [nombre,setNombre] = useState();
    const [peso,setPeso] = useState();
    const [sexo,setSexo] = useState();
    const [telefono,setTelefono] = useState();

    const addAnimal = (event) => {
        event.preventDefault();
        const newProduct = {
            id : nombre,
            nombre: nombre,
            peso : peso,  
            sexo : sexo,
            telefono : telefono
        }
        props.onAddproduct(newProduct,category);


        console.log('Categoria :'+ category);
        console.log('Nombre :'+ nombre);
        console.log('Peso :'+ peso);
        console.log('Genero :'+ sexo);
        console.log('Telefono :'+ telefono);
    }

    return(
        <div className="product-table-container">
            <div>
                {props.productsList.map((category, index)=>{
                    return (
                        <React.Fragment key = {category.id}>
                            <ProductCategoryRow categoryName={category.name}/>
                            {category.products.map((product,categoryName,indexProduct)=>{
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
                <form className="formguardar table">
                    <table className="formguardar">
                        <tbody>
                            <tr>
                                <td>
                                    Raza
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select value={category} 
                                        onChange={(event)=>{
                                            console.log(event.target.value);
                                            setCategory(event.target.value);
                                        }}>
                                        <option value="c1">Perro</option>
                                        <option value="c2">Gato</option>
                                        <option value="c3">Caballo</option>
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
                                <td>Peso</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text"
                                            value={peso}  
                                            onChange={(event)=>{
                                                setPeso(event.target.value);
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
                                <td>Telefono</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text"
                                            value={telefono}  
                                            onChange={(event)=>{
                                                setTelefono(event.target.value);
                                            }}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br/>
                                    <button onClick={addAnimal}>Adicionar animal</button>
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