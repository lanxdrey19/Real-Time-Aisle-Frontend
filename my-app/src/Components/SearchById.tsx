import React, {useState}  from 'react';
import { Grid, TextField, Button } from '@material-ui/core';


function SearchById(props : any) {

  const [searchEntryById , setSearchEntryById] = useState('');

    return (
        <div>
            <h2 className='title'>Search By ID</h2>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="Search" variant="filled" size="small" onChange={e => setSearchEntryById(e.target.value)}/>
 
          </form>
          
          
            <Button variant="contained" color="primary" size="large" style={{  width: "100%" }} onClick={(e) => props.retrieveAisle(searchEntryById)}>
                Submit
            </Button>
          

        </Grid>
        </div>
    )

}

export default SearchById;