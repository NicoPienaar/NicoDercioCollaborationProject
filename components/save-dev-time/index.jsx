import React from "react";
import Box from "@mui/material/Box";
import { SiWordpress } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { BiStopwatch } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiBulma } from "react-icons/si";
import { BiAtom } from "react-icons/bi";
import { Grid, Typography, Button, Container } from "@mui/material";

const DevTime = () => {
  return (
    <div style={{ height: "500px" }}>
      {/* //text grid */}
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            height: "100vh",
            alignItems: "center",
            //padding: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "55%",
            }}
          ></Box>
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
          <div class="devTimeBox">
            <SiWordpress
              style={{
                fontSize: "130px",
                padding: "35px",
                borderRadius: "10px",
                color: "#f1f1f1",
                backgroundColor: "#0793b4",
                boxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                webkitBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                mozBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
              }}
            ></SiWordpress>
            <SiWordpress
              style={{
                fontSize: "130px",
                padding: "35px",
                borderRadius: "10px",
                color: "transparent",
              }}
            ></SiWordpress>
            <br></br>
            <SiWordpress
              style={{
                fontSize: "130px",
                padding: "35px",
                borderRadius: "10px",
                color: "transparent",
              }}
            ></SiWordpress>

            <SiBootstrap
              style={{
                fontSize: "130px",
                padding: "35px",
                borderRadius: "10px",
                color: "#f1f1f1",
                backgroundColor: "#a107b4",
                boxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                webkitBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                mozBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
              }}
            ></SiBootstrap>
            <SiBulma
              style={{
                fontSize: "130px",
                padding: "35px",
                borderRadius: "10px",
                color: "#f1f1f1",
                backgroundColor: "#43f486",
                boxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                webkitBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                mozBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
              }}
            ></SiBulma>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            height: "100vh",
            width: "500px",
            // background: "blue",
            display: "flex",
            alignItems: "center",
            // padding: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              justifyContent: "center",
            }}
          >
            <Typography>
              <h1 style={{ justifyContent: "left" }}>
                {" "}
                Start saving your development time{" "}
                <BiStopwatch
                  style={{
                    fontSize: "30px",
                    justifyContent: "right",
                    color: "grey",
                  }}
                ></BiStopwatch>
              </h1>
              <p style={{ color: "grey", display: "center" }}>
                Work smarter, not harder.
              </p>
              <p style={{ color: "grey", display: "center" }}>
                Join 6000+ developers who user our editor.
              </p>
            </Typography>
            <Button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                fontWeight: "35px",
                fontFamily: "saint-serif",
                borderRadius: "25px",
                justifyContent: "center",
              }}
            >
              Try demo
            </Button>
            <Button
              style={{
                backgroundColor: "blue",
                color: "#f1f1f1",
                fontWeight: "35px",
                fontFamily: "saint-serif",
                borderRadius: "25px",
                justifyContent: "center",
              }}
            >
              Try demo
            </Button>
            <Button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                fontWeight: "35px",
                fontFamily: "saint-serif",
                borderRadius: "25px",
                justifyContent: "center",
              }}
            >
              Try demo
            </Button>
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
          <Container
            maxWidth="sm"
            backgroundImage="https://cdn.dribbble.com/users/910614/screenshots/18038251/media/fd32d8d866750516f5fce48c49683dfe.jpg?compress=1&resize=1200x900&vertical=top"
          >
            <div>
              <SiWordpress
                style={{
                  fontSize: "130px",
                  padding: "35px",
                  borderRadius: "10px",
                  color: "transparent",
                }}
              ></SiWordpress>
              <SiWordpress
                style={{
                  fontSize: "130px",
                  padding: "35px",
                  borderRadius: "10px",
                  color: "#f1f1f1",
                  backgroundColor: "#0793b4",
                  boxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                  webkitBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                  mozBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                }}
              ></SiWordpress>

              <SiTailwindcss
                style={{
                  fontSize: "130px",
                  padding: "35px",
                  borderRadius: "10px",
                  color: "#00d4ff",
                  backgroundColor: "#0d0c5b",
                  boxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                  webkitBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                  mozBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                }}
              ></SiTailwindcss>
              <SiTailwindcss
                style={{
                  fontSize: "130px",
                  padding: "35px",
                  borderRadius: "10px",
                  color: "transparent",
                }}
              ></SiTailwindcss>

              <SiWordpress
                style={{
                  fontSize: "130px",
                  padding: "35px",
                  borderRadius: "10px",
                  color: "transparent",
                }}
              ></SiWordpress>

              <SiBulma
                style={{
                  fontSize: "130px",
                  padding: "35px",
                  borderRadius: "10px",
                  color: "#f1f1f1",
                  backgroundColor: "#43f486",
                  boxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                  webkitBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                  mozBoxShadow: "10px 25px 68px 8px rgba(150,140,140,0.75)",
                }}
              ></SiBulma>

              {/* <BiAtom style={{fontSize: "130px", padding: "35px",backgroundColor: "#00d4ff",borderRadius: "10px", color: "#f1f1f1"}}></BiAtom>
<BiAtom style={{fontSize: "130px", padding: "35px", color: "transparent"}}></BiAtom>

<SiTailwindcss style={{fontSize: "130px", padding: "20px",backgroundColor: "#00d4ff",borderRadius: "10px", color: "#f1f1f1"}}></SiTailwindcss> */}
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default DevTime;

const styles = {
  headerBox: {
    clipPath:
      "polygon(8% 7%, 38% 1%, 73% 3%, 89% 10%, 99% 23%, 98% 99%, 0 100%, 1% 26%)",
    width: "auto",
    height: "100vh",
    // border:'1px solid blue',
    margin: "0 10px",
    //   background:"rgba(116, 0, 255, 1)",
    // background:"url('busy.png')",
    // clipPath:'polygon(24% 54%, 52% 54%, 80% 61%, 95% 69%, 100% 100%, 30% 100%, 0 100%, 3% 64%)',
    backgroundSize: "cover",
    color: "white",
    // left:"-415px",
    // top:"1063px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
