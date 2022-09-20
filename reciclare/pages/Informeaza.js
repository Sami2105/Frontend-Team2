import Layout from "components/layout/Layout";
import { Container, Grid, Typography, Avatar, Button, Item } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CarouselComponent from "components/layout/Carusel";
import ImgMediaCard from "components/layout/CarduriArticole";
import logo from '/images/Logo.png';
import Link from "components/Link";
import Image from 'next/image';

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

const Informeaza = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="Informații"
      description="Aici găsești cele mai utile informații despre reciclare"
    >
        <Typography variant="h1" align="center" gutterBottom>
            Află cum să reciclezi corect
            </Typography>

        <Grid container spacing={2} justify="center" style={{ margin: "1.4em 0" }}>
           <Grid item xs={2}>
           <ImgMediaCard></ImgMediaCard></Grid>
           <Grid item xs={2} >
          <ImgMediaCard></ImgMediaCard></Grid>
          <Grid item xs={2}>
          <ImgMediaCard></ImgMediaCard></Grid>
          <Grid item xs={2}>
          <ImgMediaCard></ImgMediaCard></Grid>
        </Grid>

        <Grid container spacing={2} justify="center" style={{ margin: "1.2em 0" }}>
           <Grid item xs={2}>
           <ImgMediaCard></ImgMediaCard></Grid>
           <Grid item xs={2} >
          <ImgMediaCard></ImgMediaCard></Grid>
          <Grid item xs={2}>
          <ImgMediaCard></ImgMediaCard></Grid>
          <Grid item xs={2}>
          <ImgMediaCard></ImgMediaCard></Grid>
        </Grid>

    </Layout>
  );
};

export default Informeaza;
