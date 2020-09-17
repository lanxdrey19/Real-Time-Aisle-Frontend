import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

;

function DeleteAisle(props : any) {

    const [AisleToBeDeleted , setAisleToBeDeleted] = useState('');
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
            <h2 className='title'>Delete Aisle Number</h2>

            ) :<h2 className='title'>Eliminar Por Número</h2>}
            
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="Delete" variant="filled" size="small" onChange={e => setAisleToBeDeleted(e.target.value)}/>
 
          </form>
          
          
            <Button variant="contained" color="secondary" size="large" style={{  width: "95%" }} onClick={(e) => props.deleteAisleById(AisleToBeDeleted)}>
            { english ? (
                <h3>Submit </h3>

            ) : <h3>entrar </h3>}
                
            </Button>
          

        </Grid>
        </div>
    )

}

export default DeleteAisle;