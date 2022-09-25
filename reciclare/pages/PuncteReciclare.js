import Layout from "components/layout/Layout";
import { Container, Grid, Typography, Avatar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Map from "components/Map.js";

import Lista from "components/layout/ListaFirme";
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
      <Grid container spacing={4}>
        <Grid item align="left">
          <a href="/myfile.html">
            Afla mai multe informatii despre punctele de reciclare
          </a>
          <Map />
        </Grid>
        <Grid item>
          <Lista></Lista>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PuncteReciclare;
