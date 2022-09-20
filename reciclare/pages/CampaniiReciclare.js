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
      <Container maxWidth="md">
        <Grid container direction="column" >
          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
            Campanii Reciclare 
            </Typography>
            <Typography variant="h2" align="center">
            Gaseste cele mai aproapiate puncte de colectare
            </Typography>
          </Grid>
          <Grid item container  alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              
            >
             
              <Grid item>
                <Typography variant="h3">John Doe</Typography>
              </Grid>
             
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default CampaniiReciclare;
