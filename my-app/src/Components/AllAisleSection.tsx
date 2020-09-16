import React, {useState} from 'react';
import { Grid, TextField, Button, Paper , CircularProgress} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import SearchById from './SearchById';
import SearchByName from './SearchByName';
import DeleteAisle from './DeleteAisle';
import { GetAisleById } from '.././ApiCalls/GetAisleById';
import { GetAisleByName } from '.././ApiCalls/GetAisleByName';
import { DeleteAisleById } from '.././ApiCalls/DeleteAisleById';
import dataInitialiser from '.././dataInitialiser';
import AisleCard from './AisleCard';
import logo from './RealTime.png';
import './AllAisleSection.css';


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

        if ( !currentAisle ) {
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

    if ( !currentAisle ) {
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

    if ( !currentAisle ) {
        setErrorMsg(true);
    }

}




    return (
        <div>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className="top-grid"
          >
              <img src={logo} alt="logo" className="appLogo" /> 
              <SearchById retrieveAisle={retrieveAisle}/>
              <SearchByName retrieveAisleByName={retrieveAisleByName}/>
              
              <DeleteAisle deleteAisleById={deleteAisleById}/> 
              

        </Grid>
        <br></br>
        <br></br>
        <br></br>

        {isLoading  ? (
            
            
            <CircularProgress />
            
        ) : null } 


        { !isLoading && !errorMsg  ? (
            
            <AisleCard aisleName={currentAisle.aisleName} 
            aisleID={currentAisle.aisleID} 
            sections={currentAisle.sections}
            />
            
            
        ) : <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Aisle Not Found — <strong>Please refine your search...</strong>
        </Alert> } 

        {alertTime && !errorMsg && !isLoading ? (
            
            
            <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            The aisle shown above has been deleted — <strong>Will be updated on your next search</strong>
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