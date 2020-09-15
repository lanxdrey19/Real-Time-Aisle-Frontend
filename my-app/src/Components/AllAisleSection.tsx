import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import SearchById from './SearchById';
import SearchByName from './SearchByName';
import AddSection from './AddSection';
import DeleteAisle from './DeleteAisle';
import { GetAisleById } from '.././ApiCalls/GetAisleById';
import dataInitialiser from '.././dataInitialiser';


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
            <h1 className='title'>Whats in The Aisle?</h1>
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
        {!isLoading && currentAisle ? (
            
            <h1>
                {currentAisle.aisleID}
                <br></br>
                {currentAisle.aisleName}
                <br></br>
                Sections:
                <br></br>
                {currentAisle.sections.map((section : any ,key : any) => (
                        <span key={key}>
                            {section.sectionName + " "}
                            <br></br>
                        </span>
                    ))}
                
            </h1>
            
        ) : null } 
        </div>
    )

}

export default AllAisleSection;