import React, {useState} from 'react';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import SearchById from './SearchById';
import SearchByName from './SearchByName';
import AddSection from './AddSection';
import DeleteAisle from './DeleteAisle';
import { GetAisleById } from '.././ApiCalls/GetAisleById';
import dataInitialiser from '.././dataInitialiser';
import AisleCard from './AisleCard';


function AllAisleSection(props : any) {

    const [currentAisle , setCurrentAisle] = useState(dataInitialiser)
    const [isLoading , setLoadingState ] = useState(false);

    const retrieveAisle = async (query : any) => {
        console.log(query)
        setLoadingState(true);
        const response = await GetAisleById(query);
        const jsonResults = await response.json();
        console.log(jsonResults);
        setCurrentAisle(jsonResults);
        setLoadingState(false);

}


    return (
        <div>
            <h1 className='title'>What's in The Aisle?</h1>
            
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
              <SearchById retrieveAisle={retrieveAisle}/>
              <SearchByName/>
              <AddSection/>
              <DeleteAisle/> 
              

        </Grid>
        <br></br>
        <br></br>
        <br></br>
        {!isLoading && currentAisle ? (
            
            
            <AisleCard aisleName={currentAisle.aisleName} 
            aisleID={currentAisle.aisleID} 
            sections={currentAisle.sections}
            />
            
        ) : null } 
        
        </div>
    )

}

export default AllAisleSection;