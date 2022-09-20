import Layout from "components/layout/Layout";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
  Item,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CarouselComponent from "components/layout/Carusel";
import ImgMediaCard from "components/layout/CarduriArticole";
import logo from "/images/Logo.png";
import Link from "components/Link";
import Image from "next/image";

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
          <h4 className="text-xl mb-1 font-semibold">
            Ne dorim sa facem planeta un loc mai verde pentru o viata mai
            sanatoasa. Avem nevoie de oameni dedicati vin-o in echipa noastra.
            Putem sesiza probleme, invata impreuna despre recilat si pe langa
            acestea putem schimba obiecte intre noi.
          </h4>
          <Button variant="contained" href="/Inregistrare">
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={4}>
          <h4 className="text-xl mb-1 font-semibold">
            Tu reciclezi, firmele te premiaza. Afla despre campaniile de
            reciclare.{" "}
          </h4>
          <Button variant="contained" href="/CampaniiReciclare">
            Campanii active
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={8}
        justify="center"
        style={{ margin: "1.2em 0" }}
      >
        <Grid item xs={4}>
          <h4 className="text-xl mb-1 font-semibold">
            Afla unde sunt cele mai apropiate puncte de colectare.
          </h4>
          <Button variant="contained" href="/PuncteReciclare">
            Puncte de colectare
          </Button>
        </Grid>
        <Grid item xs={4}>
          <h4 className="text-xl mb-1 font-semibold">
            Pune un anunt sau colecteaza produsele oferite de alte persoane.
          </h4>
          <Button variant="contained" href="/Anunturi">
            Forum
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justify="center"
        style={{ margin: "1.2em 0" }}
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

      <Grid
        container
        spacing={2}
        justify="center"
        style={{ margin: "1.2em 0" }}
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
