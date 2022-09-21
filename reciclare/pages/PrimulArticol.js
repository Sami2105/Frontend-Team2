import React from "react";
import { useForm } from "react-hook-form";
import Layout from "components/layout/Layout";
import Image from "next/image";
import logo from "/images/Logo.png";
import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { DoneAll } from "@material-ui/icons";

const PrimulArticol = () => {
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
      title="Recicleaza corect"
      description="Inregistreaza-te"
    >
      <Grid
        container
        spacing={0}
        justify="center"
        style={{ margin: "0em 1em" }}
      >
        <Grid item style={{ margin: "1em 0em", width: "50%" }}>
          <h1>
            Ce este reciclarea – beneficii si tipuri de materiale reciclabile
          </h1>

          <h2 style={{ color: "#008037" }}>1. Ce este reciclarea?</h2>

          <div>
            Beneficiile reciclarii sunt multiple, de aceea este foarte important
            ca fiecare dintre noi sa inteleaga faptul ca in spatele legilor
            drastice privind reciclarea stau idei si principii solide, benefice
            comunitatilor.
          </div>

          <h2 style={{ color: "#008037" }}>
            2. Beneficiile reciclarii pentru mediu
          </h2>

          <div style={{ margin: "1em 0em" }}>
            prin reciclare se diminueaza considerabil depunearea deseurilor la
            gropile de gunoi care nu numai ca polueaza masiv mediu dar creeaza
            si o imagine dezolanta a oraselor, distrugand sanatatea celor care
            locuiesc in preajma lor
          </div>

          <div style={{ margin: "1em 0em" }}>
            recicland, poluantii eliberati de obicei in apa si aer prin
            depunerea deseurilor la gropile de gunoi, se diminueaza considerabil
          </div>

          <div style={{ margin: "1em 0em" }}>
            prin reciclare se reduc emisiile de gaze cu efect de sera din
            atmosfera. Acest lucru se realizeaza prin inlocuirea materiei prime
            virgine folosite, cu materie prima secundara, rezultata in urma
            reciclarii.
          </div>

          <h2 style={{ color: "#008037" }}>
            3. Ce materiale pot fi reciclate?
          </h2>

          <div>
            In zilele noastre, cea mai mare parte din produsele diverselor
            industrii pot fi reciclate: ambalaje, sticla, metal, electrice si
            electronice, baterii, anvelope si mase plastice, baterii, ulei uzat
            si nu numai.
          </div>
        </Grid>

        <Grid item align="center">
          <div style={{ margin: "0 1em" }}>
            <Image
              alt="Logo"
              align="center"
              src={logo}
              width={100}
              height={80}
            />
          </div>

          <div style={{ margin: "18rem 1em" }}>
            <Image
              alt="Logo"
              align="center"
              src={logo}
              width={100}
              height={80}
            />
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PrimulArticol;
