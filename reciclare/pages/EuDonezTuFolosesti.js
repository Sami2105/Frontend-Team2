import Layout from "components/layout/Layout";
import Cards from "components/layout/Card";

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

const EuDonezTuFolosesti = () => {
  const classes = useStyles();
  // use your picture
 
  return (
    <Layout
      // type your page title and page description.
      title=" ANUNȚURI "
      description="..."
    >
      <Container maxWidth="lg">
        <Grid container direction="column" spacing={8} alignItems="right">
          <Grid item>
            <Typography variant="h1" align="left" gutterBottom>
            ANUNȚURI
            </Typography>
            <Typography variant="h2" align="left">
            ...
            </Typography>
          </Grid>
          <Grid item container spacing={4} alignItems="right">
            <Grid
              item
              container
              md={2}
              direction="column"
              alignItems="right"
              spacing={4}
            >
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Cards></Cards>
    </Layout>
  );
};



export default EuDonezTuFolosesti;
