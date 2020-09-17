import React, {useState, useEffect} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';


function SearchByName(props : any) {

    const [searchEntryByName , setSearchEntryByName] = useState('');
    const [english , setEnglish] = useState(true);
  

    return (
        <div>
            <Button onClick={(e) => setEnglish(true)} >
            english
            </Button>
            <Button onClick={(e) => setEnglish(false)}>
            español
          </Button>
  
            { english ? (
            <h2 className='title'>Search By Name</h2>

            ) :<h2 className='title'>Buscar Por Nombre </h2>}
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="Search" variant="filled" size="small" onChange={(e : any) => setSearchEntryByName(e.target.value)}/>
 
          </form>
          
          
            <Button variant="contained" color="primary" size="large" style={{  width: "100%" }} onClick={(e) => props.retrieveAisleByName(searchEntryByName)} >
            { english ? (
                <h3>Submit </h3>

            ) : <h3>entrar </h3>}
                
            </Button>
          

        </Grid>
        </div>
    )

}

export default SearchByName;