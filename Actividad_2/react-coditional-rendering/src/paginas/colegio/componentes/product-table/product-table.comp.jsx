import React from 'react';
import './product-table.style.css';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';

const ProductTable = () => {

    return(
        <div className="product-table-container">
           <ProductCategoryRow categoryName="  Programacion 1"/>
           <ProductRow product={{
               nombre:"Maicol Lopez ",
               nota:4,
               sexo:"Masculino",
               imagen:""
           }}/>
           <ProductRow product={{
               nombre:"Santiago Rivera ",
               nota:2.9,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Sara rios ",
               nota:2,
               sexo:"Femenino"
           }}/>
           <ProductRow product={{
               nombre:"Carla gill",
               nota:5,
               sexo:"Femenino"
           }}/>
           <ProductRow product={{
               nombre:"Alex montenegro",
               nota:5,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Raul ocampo",
               nota:1,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Luis piso",
               nota:5,
               sexo:"Masculino"
           }}/>
           <ProductCategoryRow categoryName="  Español"/>
           <ProductRow product={{
               nombre:"Ana bernal",
               nota:3,
               sexo:"Femenino",
               imagen:""
           }}/>
           <ProductRow product={{
               nombre:"Harol osorio",
               nota:4,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Felipe voll",
               nota:2.8,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Katherine San",
               nota:5,
               sexo:"Femenino"
           }}/>
           <ProductRow product={{
               nombre:"Maria angel",
               nota:5,
               sexo:"Femenino"
           }}/>
           <ProductRow product={{
               nombre:"Pedro machete",
               nota:2,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Kelly love",
               nota:5,
               sexo:"Femenino"
           }}/>
           <ProductCategoryRow categoryName="  Biologia"/>
           <ProductRow product={{
               nombre:"Osbal ocampo",
               nota:4,
               sexo:"Masculino",
               imagen:""
           }}/>
           <ProductRow product={{
               nombre:"Hector lavoe",
               nota:5,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Anny sans",
               nota:4,
               sexo:"Femenino"
           }}/>
           <ProductRow product={{
               nombre:"Andres Bosco",
               nota:5,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Alber conde",
               nota:2.5,
               sexo:"Masculino"
           }}/>
           <ProductRow product={{
               nombre:"Frank cadilack",
               nota:4,
               sexo:"Masculino"
           }}/>
        </div>
    );
}

export default ProductTable;