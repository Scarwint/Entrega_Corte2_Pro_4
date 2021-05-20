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

    return(
        <FilterableProductTable productsList={productsList}/>
    );
}

export default PaginaAnimal;
