import React from "react";
import { useForm } from "react-hook-form";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Despre from "/images/Despre.png";
import { Grid } from "@material-ui/core";

const DesprePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const myfun = (d) => {
    alert(d.fullname + " form " + d.email);
  };
  return (
    <Layout
      // type your page title and page description.
      title="Despre"
    >
      <Grid align="center">
        <h1 className="text-xl mb-1 font-semibold">Vrei să ne cunoști mai bine?</h1>
        <h2 className="text-xl mb-1 font-semibold">
          Descoperă aici cum a luat naștere acest proiect și care sunt
          intențiile noastre.
        </h2>
      </Grid>
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
        </Grid>
        <Grid item xs={4}>
          <Image
            alt="Despre"
            align="center"
            src={Despre}
            width={950}
            height={788}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default DesprePage;
