import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

function AddSection(props : any) {

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
           
            <TextField id="filled-basic" label="Add Section" variant="filled" size="small" />
 
          </form>
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="To Aisle (Aisle ID)" variant="filled" size="small" />
 
          </form>
          
          
            <Button  variant="contained" color="primary" size="large" style={{  width: "97%" }} >
                Submit
            </Button>
          

        </Grid>
        </div>
    )

}

export default AddSection;