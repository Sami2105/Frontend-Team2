import Layout from "components/layout/Layout";
import { Container, Grid, Typography, Avatar, Button } from "@material-ui/core";
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

const About = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="Template - Next.js and Material-UI with Header and Footer"
      description="This is a Template using Next.js and Material-UI with Header and Footer."
    ><Container maxWidth="md">
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          style={{ marginBottom: "1em" }}
        >
          Despre reciclare-benificiile pe care le aduce naturii
        </Typography>
      
      </Container>
      <CarouselComponent></CarouselComponent>
    
      <Container maxWidth="lg">
        <Grid container spacing={10} justify="center" style={{ margin: "1.2em 0" }}>
           <ImgMediaCard></ImgMediaCard>
          <ImgMediaCard></ImgMediaCard>
          <ImgMediaCard></ImgMediaCard>
        
        </Grid>
      </Container>



    </Layout>
  );
};

export default About;
