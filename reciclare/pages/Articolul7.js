import React from "react";
import { useForm } from "react-hook-form";
import Layout from "components/layout/Layout";
import Image from "next/image";
import Articol1 from "/images/Articol1.png";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Container, Grid, Typography, Avatar } from "@material-ui/core";

const Articolul7= () => {
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
      title="Articol despre "
    >
      <h1 align="center" style={{ margin: "0em 0em" }}>
        Ce este reciclarea?
      </h1>
      <h1 align="center" style={{ margin: "0em 0em" }}>
        Beneficii si tipuri de materiale reciclabile
      </h1>
      <Grid
        container
        spacing={0}
        justify="center"
        style={{ margin: "0em 0em" }}
      >
        <Grid item style={{ margin: "1em 0em", width: "55%" }}>
          <Grid item style={{ margin: "2em 12em", width: "70%" }}>
            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              1. Ce este reciclarea?
            </h2>

            <div align="left">
              Beneficiile reciclarii sunt multiple, de aceea este foarte
              important ca fiecare dintre noi sa inteleaga faptul ca in spatele
              legilor drastice privind reciclarea stau idei si principii solide,
              benefice comunitatilor.
            </div>

            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              2. Beneficiile reciclarii pentru mediu
            </h2>

            <div align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              prin reciclare se diminueaza considerabil depunearea deseurilor la
              gropile de gunoi care nu numai ca polueaza masiv mediu dar creeaza
              si o imagine dezolanta a oraselor, distrugand sanatatea celor care
              locuiesc in preajma lor
            </div>

            <div align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              recicland, poluantii eliberati de obicei in apa si aer prin
              depunerea deseurilor la gropile de gunoi, se diminueaza
              considerabil
            </div>

            <div align="left" style={{ margin: "1em 0em" }}>
              <DoneOutlineIcon style={{ margin: "0em 0em" }}></DoneOutlineIcon>
              prin reciclare se reduc emisiile de gaze cu efect de sera din
              atmosfera. Acest lucru se realizeaza prin inlocuirea materiei
              prime virgine folosite, cu materie prima secundara, rezultata in
              urma reciclarii.
            </div>

            <h2 style={{ margin: "0.5em 2em", color: "#008037" }}>
              3. Ce materiale pot fi reciclate?
            </h2>

            <div align="left">
              In zilele noastre, cea mai mare parte din produsele diverselor
              industrii pot fi reciclate: ambalaje, sticla, metal, electrice si
              electronice, baterii, anvelope si mase plastice, baterii, ulei
              uzat si nu numai.
            </div>
          </Grid>
        </Grid>

        <Grid item align="center">
          <div style={{ margin: "0em 2.5em" }}>
            <Image
              alt="Articol1"
              align="center"
              src={Articol1}
              width={600}
              height={600}
            />
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Articolul7;
