import React from 'react';
import './product-row.style.css';

const ClienteRow = (props) => {
    return(
        <div className="product-row-container">
            {
                props.cliente.sexo === "Masculino"
                ?
                    <span className="imagen">
                        {props.cliente.imagen=<img className="imagen" src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-male-icon-png-image_4292894.jpg"/>}
                    </span>
                : 
                    <span className="imagen">
                        {props.cliente.imagen=<img className="imagen" src="https://images.emojiterra.com/twitter/v13.0/512px/2640.png"/>}
                    </span>
                  
            }
            {' '} 
            {props.cliente.nombre}
            {' '}
            {props.cliente.peso}
            {' '}
            {props.cliente.sexo}
            {' '}
            {props.cliente.direccion}
            {' '}
            {
                props.cliente.telefono !== ""
                ?
                    <span className="product-without-stock">
                        {props.cliente.telefono}
                    </span>
                    
                :
                    <span>
                        {props.cliente.telefono}
                    </span>
            }
        </div>
    );
}

export default ClienteRow;
