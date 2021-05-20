import React from 'react';
import './product-row.style.css';

const ProductRow = (props) => {
    return(
        <div className="product-row-container">
            {
                props.product.sexo === "Masculino"
                ?
                    <span className="imagen">
                        {props.product.imagen=<img className="imagen" src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-male-icon-png-image_4292894.jpg"/>}
                    </span>
                : 
                    <span className="imagen">
                        {props.product.imagen=<img className="imagen" src="https://images.emojiterra.com/twitter/v13.0/512px/2640.png"/>}
                    </span>
                  
            }
            {' '} 
            {props.product.nombre}
            {' '}
            {props.product.peso}
            {' '}
            {props.product.sexo}
            {' '}
            {
                props.product.telefono !== ""
                ?
                    <span className="product-without-stock">
                        {props.product.telefono}
                    </span>
                :
                    <span>{props.product.telefono} </span>
                    
            }
        </div>
    );
}

export default ProductRow;