import React from 'react';

  
const urlBeginning = 'https://msap2api.azurewebsites.net/api/Aisles/DeleteAisle/';



export async function DeleteAisleById(id : any) {


    
    console.log(`${urlBeginning}${id}`)
    return fetch(`${urlBeginning}${id}`,{
        method: "DELETE"
        
      });
    

    
}