import React from 'react';
import { Grid, Typography, Card, CardActionArea,CardContent,CardMedia, Button,CardActions } from '@material-ui/core';
import List from '@material-ui/core/List';
import './AisleCard.css';


function AisleCard(props : any) {

    return (
        <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Grid
        item xs = {12} md = {6}>
            <Card className='cardRoot'>
                <CardActionArea>
                
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    #{props.aisleID}
                    <br></br>
                    {props.aisleName}
                    <br></br>
                    
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    
                    Sections:
                    
                    {props.sections.map((sections : any ,key : any) => (
                        <span key={key}>
                            <br></br>
                            {sections.sectionName + " "}
                            
                        </span>
                    ))}
                    

                    
                        
                    <br></br>
                    <br></br>
                    
                    
                    </Typography>
                    
                </CardContent>
                </CardActionArea>
                <Button size="small" color="primary">Share</Button>
            </Card>

        </Grid>
        </Grid>
    ) 
}

export default AisleCard;