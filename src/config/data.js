import { Card, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "be357651ba984a3fbcc7c43a698ee87e"


function Data(){


    const[arr,setArr] = useState([])


    const getData = ()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=be357651ba984a3fbcc7c43a698ee87e").
        then((success)=>{
            console.log(success.data.articles)
            setArr(success.data.articles)
        
        }).catch((err)=>{
            console.log(err);
        })
       }
    //    console.log(arr)
    
    
       useEffect(()=>{
        getData()
       },[])


    let navigate = useNavigate()
    function moveData(element){
        navigate("/item",{
            state:element
        })
    }
    return(
     
        <div>
        {/* <h1>DATA</h1> */}
        <Grid item container spacing={5}>
            {arr.map((element,i)=>{

                return(
                    <Grid item md={4} lg={3} sm={6} xs={12}>
                        <Card className="text-center text-dark bg-light mt-5 fw-bold" height = "600px" onClick={()=>moveData(element)}  key={i}>
                            <Typography className="fw-bold text-white " variant="h4">{element.category}</Typography>

                            <CardMedia 
                            // height = "600px"
                            // width = "500px"
                            component="img"
                            image= {element.urlToImage
                            }
                            alt = "image"
                            sx={{width:"500px"}}
                                                    
                            
                            
                            />
                              {/* <Typography variant="h6">{element.description}</Typography> */}
                              <Typography  variant="h6">{element.title}</Typography>
                              <Typography  variant="h6">{element.description}</Typography>
                              <Typography  variant="h6">{element.url}</Typography>
                        </Card>

                    </Grid>
                )

            })}

        </Grid>
    </div>
  
    )
}


export default Data;