import React, { useState } from 'react';
import './mis-tablas.style.css';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';

const MisTablas = (props) => {

    console.log(props.productsList);

    const [category,setCategory] = useState('c1');
    const [nombre,setNombre] = useState();
    const [peso,setPeso] = useState();
    const [sexo,setSexo] = useState();
    const [telefono,setTelefono] = useState();

    const addAnimal = (event) => {
        event.preventDefault();
        console.log('Categoria :'+ category);
        console.log('Nombre :'+ nombre);
        console.log('Peso :'+ peso);
        console.log('Genero :'+ sexo);
        console.log('Telefono :'+ telefono);
    }

    return(
        <div className="product-table-container-2">
            <div>
                <form className="formguardar-2">
                    <table className="formguardar-2">
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

export default MisTablas;