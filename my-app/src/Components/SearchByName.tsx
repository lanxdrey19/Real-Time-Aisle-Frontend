import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

function SearchByName(props : any) {

    const [searchEntryByName , setSearchEntryByName] = useState('');

    return (
        <div>
            <h2 className='title'>Search By Name</h2>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="Search" variant="filled" size="small" onChange={e => setSearchEntryByName(e.target.value)}/>
 
          </form>
          
          
            <Button variant="contained" color="primary" size="large" style={{  width: "100%" }} onClick={(e) => props.retrieveAisleByName(searchEntryByName)} >
                Submit
            </Button>
          

        </Grid>
        </div>
    )

}

export default SearchByName;