import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import SearchById from './SearchById';
import SearchByName from './SearchByName';
import AddSection from './AddSection';
import DeleteAisle from './DeleteAisle';


function AllAisleSection(props : any) {

    return (
        <div>
            <h1 className='title'>Whats in The Aisle?</h1>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
              <SearchById/>
              <SearchByName/>
              <AddSection/>
              <DeleteAisle/> 
        </Grid>
        </div>
    )

}

export default AllAisleSection;