import React from "react";
import Box from "@mui/material/Box";
import {Grid, Typography, Button} from "@mui/material";

const JanuaryBusyMonth = () => {
  return (
    <div>
      {/* //text grid */}
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            height: "100vh",
           // background: "#9e9ea7",
          
            alignItems: "center",
            padding: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >

          {" "}
          <Box sx={{height:"100px", display:"flex", justifyContent:"center", alignItems:'center', margin:"20px 0", display:"flex"}}>
              <Typography align="center" variant="h1" fontSize={42} sx={{fontWeight:"bolder", letterSpacing:"2px"}}>
                      january was a 
              </Typography>
              <Box sx={styles.headerBox}>
                  {/* <img src="busy.png" alt="busy" width="200px" /> */}
              
              
              {/* <Typography color="#red" backgroundColor="purple" align="center" variant="h1" fontSize={40} sx={{height: '150px',fontWeight:"bold", zIndex:"1"}}>           
               Busy Month */}
               {/* <Box sx={{height:"200px", width:"auto", border:"1px solid red", padding: "10px",  clipPath:'polygon(8% 7%, 38% 1%, 73% 3%, 89% 10%, 99% 23%, 98% 99%, 0 100%, 1% 26%)', */}
     {/* }}> */}

     <Box sx={{clipPath:'polygon(8% 7%, 38% 1%, 73% 3%, 89% 10%, 99% 23%, 98% 99%, 0 100%, 1% 26%)'}}>
               <Typography align="center" color="#f1f1f1" backgroundColor= "purple" variant="h1" fontSize={42} sx={{ zIndex: "2", fontWeight:"bolder", letterSpacing:"2px"}}>  
                       Busy Month 
              </Typography>
              </Box>
              </Box>
              
        </Box>
        
      
          <Typography variant="p" fontFamily= "sans-serif" >
             We've added the largest UI library, and we can tell you how we'll
            integrate WordPress.
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
          lg={4}
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
            <div style={{ borderRadius: "25%, 25p%, 0, 0", boxShadow: "4px 9px 14px -1px rgba(0,0,0,0.58)",
WebkitBoxShadow: "4px 9px 14px -1px rgba(0,0,0,0.58)"}}>

          <img
            src="https://cdn.dribbble.com/userupload/2391687/file/original-bf008ac1abe805ca6edca76fb33b1f10.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x900"
            style={{ objectFit: "contain", width: "100%", margin: "auto 0" }}
            />
            
            <Typography align="left" variant="h1" fontSize={12} sx={{fontWeight:"bolder", letterSpacing:"2px"}}>
                <h1>Plain UI for Bulma, Bootstrap & Tailwind</h1>
                <p style = {{fontFamily: 'sans-serif', fontWeight: 'normal'}}>We've added a set of components that doesn't dictate style. Plain UI allows you to start with a minimalist design and customize it in no time.</p>
            </Typography>
          </div>
        </Grid>
        <Grid 
          item
          xs={12}
          lg={4}
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
            <div style={{ borderRadius: "25%, 25p%, 0, 0", boxShadow: "4px 9px 14px -1px rgba(0,0,0,0.58)",
WebkitBoxShadow: "4px 9px 14px -1px rgba(0,0,0,0.58)"}}>
          <img
            src="https://cdn.dribbble.com/users/2390402/screenshots/16617463/media/1eb993208aed66dd0afcec2281e9983d.png?compress=1&resize=1200x900&vertical=top"
            style={{ objectFit: "contain", width: "100%", margin: "auto 0" }}
            />
            
            <Typography align="left" variant="h1" fontSize={12} sx={{fontWeight:"bolder", letterSpacing:"2px"}}>
                <h1>CSS Filters and Transitions</h1>
                <p style = {{fontFamily: 'sans-serif', fontWeight: 'normal'}}>You can play with components easily with the tools added in the right menu. We are consistently expanding the editor's capabilities.</p>
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
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
            <div style={{ borderRadius: "25%, 25p%, 0, 0", boxShadow: "4px 9px 14px -1px rgba(0,0,0,0.58)",
WebkitBoxShadow: "4px 9px 14px -1px rgba(0,0,0,0.58)"}}>
          <img
            src="https://cdn.dribbble.com/users/2390402/screenshots/16617463/media/1eb993208aed66dd0afcec2281e9983d.png?compress=1&resize=1200x900&vertical=top"
            style={{ objectFit: "contain", width: "100%", margin: "auto 0" }}  
          />
          <br/>
        <Typography align="left" variant="h1" fontSize={12} sx={{fontWeight:"bolder", letterSpacing:"2px"}}>
            <h1>Fixes improving backend structure</h1>
            <p style = {{fontFamily: 'sans-serif', fontWeight: 'normal'}}>Work you can't see, but it's there. We are improving our backend to be able to seamlessly add new functionalities.</p>
        </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default JanuaryBusyMonth;


const styles = {
    headerBox:{
      clipPath:'polygon(8% 7%, 38% 1%, 73% 3%, 89% 10%, 99% 23%, 98% 99%, 0 100%, 1% 26%)',
         width:"auto",
         height:"100vh",
        // border:'1px solid blue',
        margin:"0 10px",
      //   background:"rgba(116, 0, 255, 1)",
      // background:"url('busy.png')",
      // clipPath:'polygon(24% 54%, 52% 54%, 80% 61%, 95% 69%, 100% 100%, 30% 100%, 0 100%, 3% 64%)',
      backgroundSize:"cover",
        color:"white",
        // left:"-415px",
        // top:"1063px",
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
       
    }
}