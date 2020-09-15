import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

function AddSection(props : any) {

    const [SectionToBeAdded , setSectionToBeAdded] = useState('');
    const [AisleToBeAdded , setAisleToBeAdded] = useState('');

    return (
        <div>
            <h2 className='title'>Add Section to Aisle</h2>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="Add Section" variant="filled" size="small" onChange={e => setSectionToBeAdded(e.target.value)} />
 
          </form>
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="To Aisle (Enter Aisle ID)" variant="filled" size="small" onChange={e => setAisleToBeAdded(e.target.value)} />
 
          </form>
          
          
            <Button  variant="contained" color="primary" size="large" style={{  width: "97%" }} >
                Submit
            </Button>
          

        </Grid>
        </div>
    )

}

export default AddSection;