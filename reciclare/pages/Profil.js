import Layout from "components/layout/Layout";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Cards from "components/layout/Card";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "25px",
    height: "25px",

    [theme.breakpoints.down("xs")]: {
      width: "1px",
      height: "1px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));
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
          <div>{children}</div>
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

const Profil = () => {
  const classes = useStyles();
  // use your picture
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout
      // type your page title and page description.
      title="Profil"
    >
      <Grid container spacing={8} justify="center">
        <Grid item xs={4}>
          <Typography variant="h4" align="left" gutterBottom>
            <MenuItem>
              <Avatar style={{ width: 125, height: 125 }}></Avatar>
            </MenuItem>
            Nume cont
          </Typography>

          <Typography variant="subtitle2" component="div">
            <MailIcon></MailIcon>
            <a>xxxxxxxxxxxx@yahoo.com</a>
          </Typography>

          <Typography variant="subtitle2" component="div">
            <CallIcon></CallIcon>
            <a>07xxxxxxxx</a>
          </Typography>

          <Typography variant="subtitle2" component="div">
            <SettingsIcon></SettingsIcon>
            <a style={{ color: "blue" }} href="/setariProfil">
              {"Setări profil"}
            </a>
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Donații" {...a11yProps(0)} />
              <Tab label="Probleme" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div>
              <Cards></Cards>
            </div>
            <div>
              <Cards></Cards>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid>
              <Cards></Cards>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Profil;
