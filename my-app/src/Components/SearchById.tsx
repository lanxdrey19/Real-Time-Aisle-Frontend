import React, {useState}  from 'react';
import { Grid, TextField, Button } from '@material-ui/core';



function SearchById(props : any) {

  const [searchEntryById , setSearchEntryById] = useState('');
  const [english , setEnglish] = useState(true);


    return (
        <div>
           <Button onClick={(e) => setEnglish(true)} >
            english
            </Button>
            <Button onClick={(e) => setEnglish(false)}>
            spanish
          </Button>
  
            { english ? (
            <h2 className='title'>Search By Number</h2>

            ) :<h2 className='title'>
            Buscar Por Número</h2>}
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
            { english ? (
                <h3>Submit </h3>

            ) : <h3>entrar </h3>}
                
            </Button>
          

        </Grid>
        </div>
    )

}

export default SearchById;