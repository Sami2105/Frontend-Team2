import Layout from "components/layout/Layout";
import { Container, Grid, Typography, Avatar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Map from "components/Map.js";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const PuncteReciclare = () => {
  const classes = useStyles();
  // use your picture

  return (
    <Layout
      // type your page title and page description.
      title=" Puncte de reciclare "
    >
      <Typography variant="h1" align="center" gutterBottom>
        Puncte de reciclare
      </Typography>
      <Grid
        container
        spacing={6}
        justify="center"
        style={{ margin: "0em 1em" }}
      >
        {" "}
        <Grid item>
          <section>
            <a href="/myfile.html">
              Afla mai multe informatii despre punctele de reciclare
            </a>

            <Map />
          </section>
        </Grid>
        <Grid item>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemText primary="Firme de transport" />
            </ListItem>

            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Firma1"
                secondary="Telefon: 07xx xxx xxx"
              />
            </ListItem>

            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Firma2"
                secondary="Telefon: 07xx xxx xxx"
              />
            </ListItem>

            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Firma3"
                secondary="Telefon: 07xx xxx xxx"
              />
            </ListItem>

            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Firma4"
                secondary="Telefon: 07xx xxx xxx"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PuncteReciclare;
