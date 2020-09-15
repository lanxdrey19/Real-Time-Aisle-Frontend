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

    const [currentAisle , setCurrentAisle] = useState(dataInitialiser);
    const [isLoading , setLoadingState ] = useState(false);
    const [errorMsg, setErrorMsg ] = useState(false);

    const retrieveAisle = async (query : any) => {
        
        console.log("normal");
        setErrorMsg(false);
        
        try {
        console.log(query)
        setLoadingState(true);
        const response = await GetAisleById(query);
        console.log(response);
        if (!response.ok) {
            setErrorMsg(true);
            console.log("leshgooo");
        } else {
        

        const jsonResults = await response.json();

        console.log(jsonResults);
        setCurrentAisle(jsonResults);

        }
        
        setLoadingState(false);

        } catch (error) {
            setErrorMsg(true);
        }

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

        {isLoading  ? (
            
            
            <h2>Please Wait...</h2>
            
        ) : null } 

        {!isLoading && currentAisle && !errorMsg ? (
            
            
            <AisleCard aisleName={currentAisle.aisleName} 
            aisleID={currentAisle.aisleID} 
            sections={currentAisle.sections}
            />
            
        ) : <h2> Aisle not found. Please refine your search...</h2> } 
        
        </div>
        
    )

}

export default AllAisleSection;