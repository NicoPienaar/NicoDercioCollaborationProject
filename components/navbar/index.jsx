import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="" sx={{ background: "transparent" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 89px",
          }}
        >
         
            
          <Box
            sx={{
              width: "120px",
              height: "50px",
              backgroundSize: "cover",
              backgroundPosition:'center',
              backgroundImage:
                'url("https://images-platform.99static.com//l6PY7CIMnNDjCyuPz1yRWdjRcyQ=/75x86:1179x1190/fit-in/500x500/99designs-contests-attachments/103/103040/attachment_103040595")',
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems:'center',
              background: "",
              color: "#111",
              fontWeight: "700",
              width: "50%",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Products
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Case Studies
            </Typography>
            {/* <Box sx={{
            background: 'rgb(238,174,202)',
            height:'50px',
            width:'100px',
            background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          }}>Lett</Box> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pricing
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              About
            </Typography>
          </Box>
         <Box>
         <Button sx={{color:"navy"}}>Login</Button>
          <Button variant={"filled"} sx={{ background:'navy' , borderRadius:'21px' , margin:'0px 16px'}}>Login</Button>
         </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
