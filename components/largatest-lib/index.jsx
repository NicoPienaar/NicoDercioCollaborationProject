import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Collage from "../collage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LabTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#2a3342",
        color: "#eee",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        fontSize={"82px"}
        margin={"32px 0px"}
        fontWeight="600"
        width="50%"
      >
        Largest UI library for Tailwind CSS
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          id="collage-container"
          sx={{
            minHeight: "65vh",
            maxWidth: "900px",
            backgroundImage:
              'url("https://cdn.dribbble.com/users/11792940/screenshots/18267003/media/4260ddc92c1fe8a1f610fffa48ca8bdd.gif")',
          }}
        ></Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Collage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          id="collage-container"
          sx={{
            minHeight: "65vh",
            minWidth: "900px",
            backgroundImage:
              'url("https://cdn.dribbble.com/users/11792940/screenshots/18267003/media/4260ddc92c1fe8a1f610fffa48ca8bdd.gif")',
          }}
        ></Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Collage />
      </TabPanel>
    </Box>
  );
}
