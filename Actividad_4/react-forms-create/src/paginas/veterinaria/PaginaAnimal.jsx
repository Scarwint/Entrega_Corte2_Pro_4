import { useState } from 'react';
import FilterableProductTable from './componentes/filterable-product-table/filterable-product-table.comp';

const PaginaAnimal = () => {

    let productsList = [
        {   
            id : 'c1',
            name:'Perro',
            products:[
                {
                    id : 'c1p1',
                    nombre:"Anusa",
                    peso:"20kg",
                    sexo:"Masculino",
                    telefono:"3225415874",
                    imagen:""
                },
                {
                    id : 'c1p2',
                    nombre:"Arañazos",
                    peso:"30kg",
                    sexo:"Masculino",
                    telefono:"3568471547",
                    imagen:""
                },
                {
                    id : 'c1p3',
                    nombre:"Ariel",
                    peso:"15kg",
                    sexo:"Masculino",
                    telefono:"3154751484",
                    imagen:""
                },
                {
                    id : 'c1p4',
                    nombre:"Akeita",
                    peso:"30kg",
                    sexo:"Femenino",
                    telefono:"3201547485",
                    imagen:""
                },
                {
                    id : 'c1p5',
                    nombre:"Akita",
                    peso:"25kg",
                    sexo:"Femenino",
                    telefono:"3356984741",
                    imagen:""
                },
                {
                    id : 'c1p6',
                    nombre:"Arnol",
                    peso:"18kg",
                    sexo:"Masculino",
                    telefono:"3251487585",
                    imagen:""
                },
                {
                    id : 'c1p7',
                    nombre:"Anaís",
                    peso:"20kg",
                    sexo:"Femenino",
                    telefono:"33521487415",
                    imagen:""
                }
            ]
         },
        {   
            id : 'c2',
            name:'Gato',
            products:[
                {
                    id : 'c2p1',
                    nombre:"Audrey",
                    peso:"10kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c2p2',
                    nombre:"Anastasia",
                    peso:"15kg",
                    sexo:"Femenino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c2p3',
                    nombre:"Ameli",
                    peso:"13kg",
                    sexo:"Femenino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c2p4',
                    nombre:"Amaro",
                    peso:"9kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c2p5',
                    nombre:"Aquiles",
                    peso:"11kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c2p6',
                    nombre:"Apolo",
                    peso:"11kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c2p7',
                    nombre:"Anny",
                    peso:"9kg",
                    sexo:"Femenino",
                    telefono:"33521487415",
                    imagen:""
                }

            ]
        },
        {
            id : 'c3',
            name:'Caballo',
            products:[
                {
                    id : 'c3p1',
                    nombre:"Beethoven",
                    peso:"580kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c3p2',
                    nombre:"Hachiko",
                    peso:"670kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c3p3',
                    nombre:"Arshen",
                    peso:"600kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c3p4',
                    nombre:"Buda",
                    peso:"800kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c3p5',
                    nombre:"Isis",
                    peso:"700kg",
                    sexo:"Femenino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c3p6',
                    nombre:"Bella",
                    peso:"550kg",
                    sexo:"Femenino",
                    telefono:"33521487415",
                    imagen:""
                },
                {
                    id : 'c3p7',
                    nombre:"Loky",
                    peso:"900kg",
                    sexo:"Masculino",
                    telefono:"33521487415",
                    imagen:""
                },              
            ]
        },
    ]
    /**----------------------------------------------------------------------------- */
    
    let clienteList = [
        {   
            id : 'c4',
            name:'Cliente',
            clientes:[
                {
                    id : 'c4p1',
                    nombre:"Martin salgado",
                    direccion:"Calle:1 Nª:1",
                    sexo:"Masculino",
                    telefono:"3225415874",
                    imagen:""
                },
                {
                    id : 'c4p2',
                    nombre:"Sara lago",
                    direccion:"Calle:2 Nª:2",
                    sexo:"Femenino",
                    telefono:"3256847851",
                    imagen:""
                },
                {
                    id : 'c4p3',
                    nombre:"Bang hellsing",
                    direccion:"Calle:3 Nª:3",
                    sexo:"Masculino",
                    telefono:"3159658471",
                    imagen:""
                },
                {
                    id : 'c4p4',
                    nombre:"Akame gakil",
                    direccion:"Calle:4 Nª:4",
                    sexo:"Femenino",
                    telefono:"3165847481",
                    imagen:""
                },
                {
                    id : 'c4p5',
                    nombre:"Auron noche",
                    direccion:"Calle:5 Nª:5",
                    sexo:"Masculino",
                    telefono:"3105487415",
                    imagen:""
                },
                {
                    id : 'c4p6',
                    nombre:"Aura sanz",
                    direccion:"Calle:6 Nª:6",
                    sexo:"Femenino",
                    telefono:"3205986814",
                    imagen:""
                },
                {
                    id : 'c4p7',
                    nombre:"Frank montenegro",
                    direccion:"Calle:7 Nª:7",
                    sexo:"Masculino",
                    telefono:"3125201495",
                    imagen:""
                }
            ]
         },
    ]


    
    /**----------------------------------------------------------------------------- */
    const [products,setProducts]=useState(productsList);
    const [clientes,setClientes]=useState(clienteList);
    
    return(
        <FilterableProductTable productsList={products} clienteList={clientes}
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

            onAddcliente = {(newClienteObj, categoryId)=>{
                //1. Crear nuevo arreglo de product
                const newClientes = [];
                for(let i=0; i<clientes.length;i++){
                    if(clientes[i].id !== categoryId){
                        newClientes.push(clientes[i]);
                        //products[i].products.push(productObj);
                    }else{
                        newClientes.push({...clientes[i],
                            clientes:[...clientes[i].clientes, newClienteObj]
                        });
                    }
                }
                //2. Cambiar el arreglo products atraves de la funcion setProducts
                setClientes(newClientes);
                console.log(newClientes)
                console.log(categoryId)
                console.log(newClienteObj)
            }}
        />
    );

    {/**
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
    */}
}

export default PaginaAnimal;
