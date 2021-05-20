import FilterableProductTable from './componentes/filterable-product-table/filterable-product-table.comp';

const PaginaColegio = () => {

    let productsList = [
        {   
            id : 'c1',
            name:'Programacion 1',
            products:[
                {
                    id : 'c1p1',
                    nombre:"Maicol Lopez ",
                    nota:4,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c1p2',
                    nombre:"Santiago Rivera ",
                    nota:2.9,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c1p3',
                    nombre:"Sara rios ",
                    nota:2,
                    sexo:"Femenino",
                    imagen:""
                },
                {
                    id : 'c1p4',
                    nombre:"Carla gill",
                    nota:5,
                    sexo:"Femenino",
                    imagen:""
                },
                {
                    id : 'c1p5',
                    nombre:"Alex montenegro",
                    nota:5,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c1p6',
                    nombre:"Raul ocampo",
                    nota:1,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c1p7',
                    nombre:"Luis piso",
                    nota:5,
                    sexo:"Masculino",
                    imagen:""
                }

            ]
         },
        {   
            id : 'c2',
            name:'Español',
            products:[
                {
                    id : 'c2p1',
                    nombre:"Ana bernal",
                    nota:3,
                    sexo:"Femenino",
                    imagen:""
                },
                {
                    id : 'c2p2',
                    nombre:"Harol osorio",
                    nota:4,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c2p3',
                    nombre:"Felipe voll",
                    nota:2.8,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c2p4',
                    nombre:"Katherine San",
                    nota:5,
                    sexo:"Femenino",
                    imagen:""
                },
                {
                    id : 'c2p5',
                    nombre:"Maria angel",
                    nota:5,
                    sexo:"Femenino",
                    imagen:""
                },
                {
                    id : 'c2p6',
                    nombre:"Pedro machete",
                    nota:2,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c2p7',
                    nombre:"Kelly love",
                    nota:5,
                    sexo:"Femenino",
                    imagen:""
                }

            ]
        },
        {
            id : 'c3',
            name:'Biologia',
            products:[
                {
                    id : 'c3p1',
                    nombre:"Osbal ocampo",
                    nota:4,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c3p2',
                    nombre:"Hector lavoe",
                    nota:5,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c3p3',
                    nombre:"Anny sans",
                    nota:4,
                    sexo:"Femenino",
                    imagen:""
                },
                {
                    id : 'c3p4',
                    nombre:"Andres Bosco",
                    nota:5,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c3p5',
                    nombre:"Alber conde",
                    nota:2.5,
                    sexo:"Masculino",
                    imagen:""
                },
                {
                    id : 'c3p6',
                    nombre:"Frank cadilack",
                    nota:4,
                    sexo:"Masculino",
                    imagen:""
                },                
            ]
        },
    ]

    return(
        <FilterableProductTable productsList={productsList}/>
    );
}

export default PaginaColegio;
