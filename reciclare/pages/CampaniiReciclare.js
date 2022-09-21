import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const CampaniiReciclare = () => {
  const classes = useStyles();
  // use your picture

  return (
    <Layout
      // type your page title and page description.
      title="Campanii de reciclare"
      description="Aici găsești campanii cu si despre reciclare. Implică-te!"
    >
      <Typography variant="h1" align="center" gutterBottom>
        Campanii de reciclare
      </Typography>
      <Grid container>
        <Grid item>

        </Grid>
        <Grid item>

        </Grid>
      </Grid>
    </Layout>
  );
};

export default CampaniiReciclare;
