import React from "react";

import { Grid, Typography, Button, Box, ButtonGroup } from "@mui/material";
import { FaBeer } from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {SiBootstrap} from 'react-icons/si';
import {SiBulma} from 'react-icons/si';
import { fontFamily } from "@mui/system";

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
const Banner = () => {
  return (
    <div>
      {/* //text grid */}
      <Grid container style={{background: '#f1f1f1',
background: 'linear-gradient(90deg, #e8ebe5 0%, #d2ebf0 45%, #41f06c 100%)'}}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "100vh",
            // background: "red",
            alignItems: "center",
            padding: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {" "}
 
          <ButtonGroup  aria-label="outlined primary button group">
        <div> <Button  style={{margin: '10px', borderRadius: '25px',backgroundColor: '#f1f1f1', borderColor: '#f1f1f1'}}><SiTailwindcss style={{color: 'turquoise', fontSize: '25px'}}/> <p style={{ fontFamily: 'arial', color: 'black', fontSize: '10px'}}>Tailwind css</p></Button></div> 
          
         <div> <Button style={{margin: '10px', borderRadius: '25px',backgroundColor: '#f1f1f1', borderColor: '#f1f1f1'}}><SiBootstrap style={{color: 'lightpurple', fontSize: '25px'}}/> <p style={{ fontFamily: 'arial', color: 'darkgrey', fontSize: '10px'}}>Bootstrap soon</p></Button></div>
          
          <div><Button style={{margin: '10px', borderRadius: '25px',backgroundColor: '#f1f1f1', borderColor: '#f1f1f1'}}><SiBulma style={{color: 'lightgreen', fontSize: '25px'}}/> <p style= {{ fontFamily: 'arial', color: 'darkgrey', fontSize: '10px'}}>Bulma soon</p></Button></div>
          </ButtonGroup>




          
          <Typography variant="h2" fontSize={"78px"} fontWeight={"550"}>
      
            Flex your skills with FlexUI
          </Typography>
          <Typography variant="p">
            We've added the largest UI library, and we can tell you how we'll
            integrate WordPress
          </Typography>
          <br></br>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "55%",
            }}
          >
            <Button
              variant="filled"
              sx={{
                backgroundColor: "green",
                color: "#eee",
                borderRadius: "21px",
                fontWeight: "600",
              }}
            >
              Try flex live free
            </Button>
            <Button
              sx={{ color: "#111", borderRadius: "21px", fontWeight: "600" }}
            >
              Landmark
            </Button>
          </Box>
        </Grid>

        {/* //image grid */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "100vh",
            // background: "blue",
            display: "flex",
            alignItems: "center",
            padding: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="https://cdn.dribbble.com/users/2390402/screenshots/16617463/media/1eb993208aed66dd0afcec2281e9983d.png?compress=1&resize=1200x900&vertical=top"
            style={{ objectFit: "contain", width: "100%", margin: "auto 0" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
