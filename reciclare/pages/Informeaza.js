import Layout from "components/layout/Layout";
import { Grid, Typography, Avatar, Item } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Articole from "components/layout/Articolele";

const Informeaza = () => {
  return (
    <Layout
      // type your page title and page description.
      title="Informații"
      description="Aici găsești cele mai utile informații despre reciclare"
    >
      <Typography variant="h1" align="center" gutterBottom>
        Află cum să reciclezi corect
      </Typography>

      <Articole></Articole>
    </Layout>
  );
};

export default Informeaza;
