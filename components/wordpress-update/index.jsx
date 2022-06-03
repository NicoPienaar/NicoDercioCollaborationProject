import { Box, Grid, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const WordPressUpdate = () => {
  return (
    <div
      style={{
        padding: "32px 64px",
        background: "#110923",
        color: "#eee",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h1" fontWeight={"600"}>
            Wordpress Update
          </Typography>
          <br />
          <Typography variant="p" sx={{ marginTop: "16px" }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. It is also
            used to temporarily replace text in a process called greeking, which
            allows designers to consider the form of a webpage or publication,
            without the meaning of the text influencing the design.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundImage:
                'url("https://flevix.com/wp-content/uploads/2021/05/Bubble-Background.svg")',
              backgroundSize: "cover",
              width: "100%",
              minHeight: "55vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight: "55vh",
                background: "rgba(1,1,1,.5)",
              }}
            >
              <img
                src="https://img.icons8.com/color/344/wordpress.png"
                alt=""
                height="130px"
                width="130px"
              />
              <img
                src="https://img.icons8.com/color/344/flutter.png"
                alt=""
                height="130px"
                width="130px"
                style={{
                  transform: "translateY(64px) translateX(-48px)",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              width: "90%",
              marginRight: "16px",
              minHeight: "50vh",
              marginTop: "48px",
              background: "#4d6bda",
              color: "#eee",
            }}
          >
            <Typography variant="p">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. It is
              also used to temporarily replace text in a process called
              greeking, which allows designers to consider the form of a webpage
              or publication, without the meaning of the text influencing the
              design.
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              width: "90%",
              marginLeft: "16px",
              marginTop: "48px",
              minHeight: "50vh",
              // marginTop: "16px",
              background: "#4d6bda",
              color: "#eee",
            }}
          >
            <Typography variant="p">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. It is
              also used to temporarily replace text in a process called
              greeking, which allows designers to consider the form of a webpage
              or publication, without the meaning of the text influencing the
              design.
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "80%",
              margin: "32px auto",
              textAlign: "center",
              background: "",
            }}
          >
            <Typography variant="p">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may.
            </Typography>
          </Box>

        {
          [
            {
              "Title":"When will this be available?",
              "Answer":"Very Soon. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may."
            },
            {
              "Title":"What can I Use this with?",
              "Answer":"Very Soon. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may.Very Soon. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may."
            },
            {
              "Title":"What is the licencing required?",
              "Answer":"Very Soon. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may.Very Soon. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may.Very Soon. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may.Very Soon. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may."
            },
          ].map((item,index)=>{
            return(
              <Accordion key={index} sx={{
                margin:'16px auto'
              }}>
              <AccordionSummary
                sx={{
                  height: "100px",
                  background: "#1e2e4b",
                  color: "#eee",
                }}
                expandIcon={<ExpandMoreIcon sx={{ fill:'#eee' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  {item.Title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  minHeight: "100px",
                  background: "#1e2e4b",
                }}
              >
                <Typography sx={{
                  fontWeight:'600',
                  color:'#eee'
                }}>
                  {item.Answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
            )
          })
        }
        </Grid>
      </Grid>
    </div>
  );
};

export default WordPressUpdate;
