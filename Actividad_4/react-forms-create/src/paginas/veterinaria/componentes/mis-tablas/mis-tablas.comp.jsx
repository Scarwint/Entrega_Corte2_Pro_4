import React, { useState } from 'react';
import './mis-tablas.style.css';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ClienteRow from '../cliente-row/cliente-row.comp';

const MisTablas = (props) => {

    console.log(props.clienteList);

    const [category,setCategory] = useState('c1');
    const [nombre,setNombre] = useState();
    const [direccion,setDireccion] = useState();
    const [sexo,setSexo] = useState();
    const [telefono,setTelefono] = useState();

    const addCliente = (event) => {
        event.preventDefault();
        const newCliente = {
            id : nombre,
            nombre: nombre,
            direccion : direccion,  
            sexo : sexo,
            telefono : telefono
        }
        props.onAddcliente(newCliente,category);


        console.log('Categoria :'+ category);
        console.log('Nombre :'+ nombre);
        console.log('Direccion :'+ direccion);
        console.log('Genero :'+ sexo);
        console.log('Telefono :'+ telefono);
    }

    return(
        <div className="product-table-container-2">
            <div>
                {props.clienteList.map((category, index)=>{
                    return (
                        <React.Fragment key = {category.id}>
                            <ProductCategoryRow categoryName={category.name}/>
                            {category.clientes.map((cliente,indexProduct)=>{
                                    return(
                                        <ClienteRow 
                                            key={cliente.id} 
                                            cliente={cliente}
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
                                    Seleccionar categoria de cliente
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select value={category} 
                                        onChange={(event)=>{
                                            console.log(event.target.value);
                                            setCategory(event.target.value);
                                        }}>
                                        <option value="">Selecionar</option>
                                        <option value="c4">Cliente</option>
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
                                <td>Direccion</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text"
                                            value={direccion}  
                                            onChange={(event)=>{
                                                setDireccion(event.target.value);
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
                                    <button onClick={addCliente}>Adicionar animal</button>
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