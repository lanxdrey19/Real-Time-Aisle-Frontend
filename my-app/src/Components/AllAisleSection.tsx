import React, {useState} from 'react';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import SearchById from './SearchById';
import SearchByName from './SearchByName';
import AddSection from './AddSection';
import DeleteAisle from './DeleteAisle';
import { GetAisleById } from '.././ApiCalls/GetAisleById';
import { GetAisleByName } from '.././ApiCalls/GetAisleByName';
import { DeleteAisleById } from '.././ApiCalls/DeleteAisleById';
import dataInitialiser from '.././dataInitialiser';
import AisleCard from './AisleCard';


function AllAisleSection(props : any) {

    const [currentAisle , setCurrentAisle] = useState(dataInitialiser);
    const [isLoading , setLoadingState ] = useState(false);
    const [errorMsg, setErrorMsg ] = useState(false);
    const [alertTime, setAlertTime ] = useState(false);

    const retrieveAisle = async (query : any) => {
        setLoadingState(true);
        //console.log("normal");
        setErrorMsg(false);
        setAlertTime(false);
        
        try {
        console.log(query)
        
        const response = await GetAisleById(query);
        console.log(response);
        if (!response.ok) {
            setErrorMsg(true);
            //console.log("error");
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

const retrieveAisleByName = async (query : any) => {
    setLoadingState(true);
    //console.log("normal");
    setErrorMsg(false);
    setAlertTime(false);
    
    try {
    console.log(query)
    
    const response = await GetAisleByName(query);
    console.log(response);
    if (!response.ok) {
        setErrorMsg(true);
        //console.log("error");
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

const deleteAisleById = async (query : any) => {
    
    setAlertTime(true)
    setLoadingState(true);
    //console.log("normal");
    setErrorMsg(false);
    
    try {
    console.log(query)
    
    const response = await DeleteAisleById(query);
    console.log(response);
    if (!response.ok) {
        setErrorMsg(true);
        //console.log("error");
    } else {
    
        console.log("else branch reached");
    //const jsonResults = await response.json();

    //console.log(jsonResults);
    //setCurrentAisle(jsonResults);

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
              <SearchByName retrieveAisleByName={retrieveAisleByName}/>
              <AddSection/>
              <DeleteAisle deleteAisleById={deleteAisleById}/> 
              

        </Grid>
        <br></br>
        <br></br>
        <br></br>

        {isLoading  ? (
            
            
            <h2>Please Wait...</h2>
            
        ) : null } 

        {!isLoading && currentAisle && !errorMsg  ? (
            
            
            <AisleCard aisleName={currentAisle.aisleName} 
            aisleID={currentAisle.aisleID} 
            sections={currentAisle.sections}
            />
            
        ) : <h2> Aisle not found. Please refine your search...</h2> } 

        {alertTime && !errorMsg && !isLoading ? (
            
            
            <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Aisle has been deleted — <strong>Will be updated on your next search</strong>
            </Alert>
            
        ) : null} 

        {alertTime && errorMsg && !isLoading ? (
            
            
            <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Request failed — <strong>Please try again</strong>
            </Alert>
            
        ) : null} 
        
        </div>
        
    )

}

export default AllAisleSection;