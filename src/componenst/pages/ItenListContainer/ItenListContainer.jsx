
import React, { useEffect, useState } from 'react'

import {Card } from './common/Card';



const task = new Promise ((res,rej)=>{
  setTimeout(()=>{

      res(Product);

  },2000 )



})
export const ItenListContainer = () => {


     

    const[misProductos,setMisProductos] = useState([]);

    console.log(misProductos)



useEffect ( () =>{
    task.then( (resp) =>{
        setMisProductos(resp);
}).catch((error) =>{
    console.log(error);

}).finally( () =>{
    console.log("finally")
})

},[])

if(misProductos.length ===0){
   
  return <h1> <Cargando></Cargando></h1>

};

  return (
  
    <div>
      {misProductos.map((products) => (
      
        
      <Card key={products.id} productos={products}/>
  ))
}</div>
  );

}