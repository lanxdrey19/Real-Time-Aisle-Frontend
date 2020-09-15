import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import AllAisleSection from '../Components/AllAisleSection';
import logo from './app-logo.png';
import './HomePage.css';

function HomePage() {
    return (
        <div>
            
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <h1 className='title'>Real Time Aisle</h1>
            <img src={logo} alt="logo" className="appLogo" /> 
            </Grid>
           <AllAisleSection/>
           
            
        </div>
    )
}


export default HomePage