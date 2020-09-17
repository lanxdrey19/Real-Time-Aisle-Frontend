import React, {useState, useEffect} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const Speech = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
const Recognise = new Speech();
Recognise.start();

function SearchByName(props : any) {

    const [searchEntryByName , setSearchEntryByName] = useState('');
    const [english , setEnglish] = useState(true);

    const voiceCommand = () => {

        Recognise.onstart = () => {
          console.log("started");
        }
    
        
    
        Recognise.onresult = (e : any) => {
          let CurrentWordIndex = e.resultIndex;
          let CurrentWordWritten = e.results[CurrentWordIndex][0].transcript;
          console.log(CurrentWordWritten);
    
          if (CurrentWordWritten.toLowerCase() === 'search' || CurrentWordWritten.toLowerCase() === ' search') {
            props.retrieveAisleByName(searchEntryByName);
          }
    
          setTimeout( () => {
              Recognise.start();
          } , 100);
    
          Recognise.onspeechend = () => {
            Recognise.stop();
            console.log("stop");
          }
        }
      }
    
      useEffect(() => {
        voiceCommand();
      });
  

    return (
        <div>
            <Button onClick={(e) => setEnglish(true)} >
            english
            </Button>
            <Button onClick={(e) => setEnglish(false)}>
            español
          </Button>
  
            { english ? (
            <h2 className='title'>Search By Name</h2>

            ) :<h2 className='title'>Buscar Por Nombre </h2>}
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          
          <form className='searchField' noValidate autoComplete="off">
           
            <TextField id="filled-basic" label="Search" variant="filled" size="small" onChange={(e : any) => setSearchEntryByName(e.target.value)}/>
 
          </form>
          
          
            <Button variant="contained" color="primary" size="large" style={{  width: "100%" }} onClick={(e) => props.retrieveAisleByName(searchEntryByName)} >
            { english ? (
                <h3>Submit </h3>

            ) : <h3>entrar </h3>}
                
            </Button>
          

        </Grid>
        </div>
    )

}

export default SearchByName;