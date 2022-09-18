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

const PuncteReciclare = () => {
  const classes = useStyles();
  // use your picture
 
  return (
    <Layout
      // type your page title and page description.
      title=" Puncte de reciclare "
      description="Gaseste cele mai aproapiate puncte de colectare"
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
            Puncte de reciclare 
            </Typography>
            <Typography variant="h2" align="center">
            Gaseste cele mai aproapiate puncte de colectare
            </Typography>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
             
            </Grid>
            
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PuncteReciclare;
