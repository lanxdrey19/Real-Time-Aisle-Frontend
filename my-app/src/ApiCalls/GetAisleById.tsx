

  
const urlBeginning = 'https://msap2api.azurewebsites.net/api/Aisles/GetAisle/';



export async function GetAisleById(id : any) {


    
    console.log(`${urlBeginning}${id}`)
    return fetch(`${urlBeginning}${id}`);
    

    
}


