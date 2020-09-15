import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

function DeleteAisle(props : any) {

    const [AisleToBeDeleted , setAisleToBeDeleted] = useState('');

    return (
        <div>
            <h2 className='title'>Delete Aisle</h2>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="Delete" variant="filled" size="small" onChange={e => setAisleToBeDeleted(e.target.value)}/>
 
          </form>
          
          
            <Button variant="contained" color="secondary" size="large" style={{  width: "100%" }}>
                Submit
            </Button>
          

        </Grid>
        </div>
    )

}

export default DeleteAisle;