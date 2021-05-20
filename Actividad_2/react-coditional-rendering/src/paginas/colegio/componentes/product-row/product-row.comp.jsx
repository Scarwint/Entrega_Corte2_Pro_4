import React from 'react';
import './product-row.style.css';

const ProductRow = (props) => {
    return(
        <div className="product-row-container">
            {
                props.product.sexo === "Masculino"
                ?
                    <span class="imagen">
                        {props.product.imagen=<img class="imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmACqKVfTRLbty5DJTrF1vRTkZIKCdd6cMg&usqp=CAU"/>}
                    </span>
                : 
                    <span class="imagen">
                        {props.product.imagen=<img class="imagen" src="https://image.flaticon.com/icons/png/512/2335/2335114.png"/>}
                    </span>
            }
            {' '}
            {
                props.product.nota < 3
                ?
                    <span className="product-without-stock">
                        {props.product.nombre}
                    </span>
                :
                    <span>{props.product.nombre} </span>
            }
            {' '} 
            {props.product.nota}
            {' '}
            {props.product.sexo}
        </div>
    );
}

export default ProductRow;