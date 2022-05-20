import React from "react";
import {Grid, Typography, Button,Box} from "@mui/material";

const Banner = () => {
  return (
    <div>
        {/* //text grid */}
      <Grid container>
        <Grid item xs={12} md={6} sx={{
            height: "100vh",
            // background: "red",
            alignItems: "center",
            padding: "48px",
            display:'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
        }}> 
          {" "}
          <Typography variant="h2" fontSize={"78px"} fontWeight={"550"}>
              Flex your skills with FlexUI
        
          </Typography >
          <Typography variant="p">
              We've added the largest UI library, and we can tell you how we'll integrate WordPress
        
          </Typography >

          <br></br>
          <Box sx = {{display: "flex", justifyContent: "space-between", width: "55%"}}>
          <Button variant="filled" sx={{backgroundColor: "green", color: "#eee", borderRadius: "21px",fontWeight:"600"}}>
              Try flex live free
          </Button>
          <Button  sx={{ color: "#111", borderRadius: "21px",fontWeight:"600"}}>
              Landmark
          </Button>
          </Box>
        </Grid>

        {/* //image grid */}
        <Grid item xs={12} md={6} sx={{
            height: "100vh",
            // background: "blue",
            display: "flex",
            alignItems: "center",
            padding: "48px",
            display:'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
        }}>
            
            <img src="https://cdn.dribbble.com/users/2390402/screenshots/16617463/media/1eb993208aed66dd0afcec2281e9983d.png?compress=1&resize=1200x900&vertical=top" style={{objectFit: "contain", width: "100%", margin: "auto 0"}}/>

        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
