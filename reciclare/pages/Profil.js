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

const Profil = () => {
  const classes = useStyles();
  // use your picture

  return (
    <Layout
      // type your page title and page description.
      title="Profil"
    >
      <Grid container style={{ margin: "0em 1em" }}>

        <Grid item style={{ margin: "0em 12em" }}>
          <Typography
            variant="h4"
            align="left"
            style={{ margin: "1em 0em" }}
            gutterBottom
          >
            <MenuItem style={{ margin: "0em 0.7em" }}>
              <Avatar  style={{ width: 125, height: 125 }}></Avatar>
            </MenuItem>
            Nume cont
            <br />
          </Typography>

          <Typography
            variant="subtitle2"
            component="div"
            style={{ margin: "1em 0em" }}
          >
            <MailIcon ></MailIcon>
            <a style={{ margin: "0em 1em" }}>xxxxxxxxxxxx@yahoo.com</a>
          </Typography>

          <Typography
            variant="subtitle2"
            component="div"
            style={{ margin: "1em 0em" }}
          >
            <CallIcon></CallIcon>
            <a style={{ margin: "0em 1em" }}>07xxxxxxxx</a>
          </Typography>

          <Typography
            variant="subtitle2"
            component="div"
            style={{ margin: "0em 0em" }}
          >
            <SettingsIcon></SettingsIcon>
            <a
              style={{ color: "blue", margin: "0em 1em" }}
              href="/SetariProfil"
            >
              {"Setări profil"}
            </a>
          </Typography>
        </Grid>

        
        <Grid item style={{ margin: "0em 9em" }}>
          <Typography style={{ margin: "0.5em 0em" }} variant="h6" gutterBottom>
            Produse donate
          </Typography>
          <Cards></Cards>
          <Pagination
            style={{ margin: "1em 13em" }}
            count={11}
            defaultPage={6}
            siblingCount={0}
          />
          <Typography style={{ margin: "0.5em 0em" }} variant="h6" gutterBottom>
            Probleme raportate
          </Typography>
          <Cards></Cards>
          <Pagination
            style={{ margin: "1em 13em" }}
            count={11}
            defaultPage={6}
            siblingCount={0}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Profil;
