import Layout from "components/layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import CarouselComponent from "components/layout/Carusel";
import ImgMediaCard from "components/layout/CarduriArticole";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
  Item,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
  Button: {
    backgroundColor: theme.Button.color,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="Go green"
      description="Echipa Go Green își dorește o țără mai frumoasă"
    >
      <CarouselComponent></CarouselComponent>

      <Grid
        container
        spacing={8}
        justify="center"
        style={{ margin: "1.2em 0" }}
      >
        <Grid item xs={4}>
          <h1 className="text-xl mb-1 font-semibold">
            Ne dorim să facem planeta un loc mai verde pentru o viață mai
            sanatoasă.
          </h1>
          <h3 className="text-xl mb-1 font-semibold">
            Avem nevoie de oameni dedicați! Vin-o în echipa noastră și dăruiește
            obiecte reciclabile altor persoane sau caută produsele tale de
            interes, vezi cele mai apropiate puncte de reciclare față de tine și
            fii cu ochii pe campaniile de reciclare pentru a câștiga premii.
          </h3>
          <Button
            variant="outlined"
            href="/inregistrare"
            className={classes.Button}
          >
            Înregistrează-te
          </Button>
        </Grid>
        <Grid item xs={4}>
          <h3 className="text-xl mb-1 font-semibold">
            Tu reciclezi, firmele te premiaza. Afla despre campaniile de
            reciclare.{" "}
          </h3>
          <Button variant="outlined" href="/campaniiReciclare">
            Campanii active
          </Button>
          <h3 className="text-xl mb-1 font-semibold">
            Afla unde sunt cele mai apropiate puncte de colectare.
          </h3>
          <Button variant="outlined" href="/puncteReciclare">
            Puncte de colectare
          </Button>
          <h3 className="text-xl mb-1 font-semibold">
            Pune un anunt sau colecteaza produsele oferite de alte persoane.
          </h3>
          <Button variant="outlined" href="/anunturi">
            Forum
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justify="center"
        style={{ margin: "1.4em 0" }}
      >
        <h1>Fii la curent cu cele mai actuale articole de informare</h1>
      </Grid>

      <Grid
        container
        spacing={2}
        justify="center"
        style={{ margin: "1.4em 0" }}
      >
        <Grid item xs={2}>
          <ImgMediaCard></ImgMediaCard>
        </Grid>
        <Grid item xs={2}>
          <ImgMediaCard></ImgMediaCard>
        </Grid>
        <Grid item xs={2}>
          <ImgMediaCard></ImgMediaCard>
        </Grid>
        <Grid item xs={2}>
          <ImgMediaCard></ImgMediaCard>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
