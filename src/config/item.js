import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";


function Item(){
    const location = useLocation()
    return(

        <div className="d-flex justify-content-center">
        {/* <h1>DATA</h1> */}
        <Grid item container spacing={5}>
           
                    <Grid item md={4} lg={3} sm={6} xs={12}>
                        <Card className="text-center text-dark bg-light mt-5 fw-bold" height = "600px">
                            <Typography className="fw-bold text-white " variant="h4">{location.state.category}</Typography>

                            <CardMedia
                            // height = "600px"
                            // width = "500px"
                            component="img"
                            image= {location.state.urlToImage
                            }
                            alt = "image"
                            sx={{width:"500px"}}
                                                    
                            
                            
                            />
                              {/* <Typography variant="h6">{element.description}</Typography> */}
                              <Typography className="fw-bold"  variant="h6">Title : {location.state.title}</Typography>
                              <Typography className="fw-bold"  variant="h6">Description : {location.state.description}</Typography>
                              <Typography className="fw-bold"  variant="h6">URL : {location.state.url}</Typography>
                        </Card>

                    </Grid>
                

        </Grid>
    </div>
       
    )
}


export default Item;