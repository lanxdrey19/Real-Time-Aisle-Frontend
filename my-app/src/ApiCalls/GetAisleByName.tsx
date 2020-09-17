

  
const urlBeginning = 'https://msap2api.azurewebsites.net/api/Aisles/GetAisleByName/';



export async function GetAisleByName(name : any) {


    
    console.log(`${urlBeginning}${name}`)
    return fetch(`${urlBeginning}${name}`);
    

    
}
