import React, {useState, useEffect}  from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const Speech = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
const Recognise = new Speech();
Recognise.start();

function SearchById(props : any) {

  const [searchEntryById , setSearchEntryById] = useState('');

  const voiceCommand = () => {

    Recognise.onstart = () => {
      console.log("started");
    }

    

    Recognise.onresult = (e : any) => {
      let CurrentWordIndex = e.resultIndex;
      let CurrentWordWritten = e.results[CurrentWordIndex][0].transcript;
      console.log(CurrentWordWritten);

      if (CurrentWordWritten.toLowerCase() === 'id' || CurrentWordWritten.toLowerCase() === ' id') {
        props.retrieveAisle(searchEntryById);
      }

      setTimeout( () => {
          Recognise.start();
      } , 50);

      Recognise.onspeechend = () => {
        Recognise.stop();
        console.log("started");
      }
    }
  }

  useEffect(() => {
    voiceCommand();
  });

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