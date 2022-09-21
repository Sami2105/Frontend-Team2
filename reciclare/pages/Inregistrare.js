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
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { DoneAll } from "@material-ui/icons";

const Inregistrare = () => {
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
      title="Inregistrare"
      description="Inregistreaza-te"
    >
      <Grid
        container
        spacing={0}
        justify="center"
        style={{ margin: "0em 1em" }}
      >
        <Grid item align="center" style={{ margin: "8em 0em" }}>
          <h1 style={{ margin: "0em 0em" }}>
            GO GREEN este soluția pentru o lume mai bună
          </h1>
  
          <h2 style={{ margin: "0em 0em" ,   color:"#008037"}}>
            Contribuie și tu la o țară mai frumoasă!
          </h2>
          
          <h4 style={{ margin: "0em 0em" }}>
            Merită să te înregistrezi pentru că:
          </h4>
          
          <h1  style={{ margin: "1em 0em" }}>
            <DoneOutlineIcon style={{ margin: "0em 1em" }}></DoneOutlineIcon> 
            GO GREEN 
          </h1>
          
          <h1  style={{ margin: "1em 0em" }}>
          <DoneOutlineIcon style={{ margin: "0em 1em" }}></DoneOutlineIcon> 
            GO GREEN 
          </h1>
          
          <h1  style={{ margin: "1em 0em" }}>
          <DoneOutlineIcon style={{ margin: "0em 1em" }}></DoneOutlineIcon> 
            GO GREEN 
          </h1>
          
        </Grid>

        <Grid item align="center">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ margin: "0 6em" }}>
              <Image alt="Logo" src={logo} width={90} height={90} />
            </div>

            <div style={{ margin: "1.2em 8em" }}>
              <Typography variant="h5" component="div">
                Creează un cont nou
              </Typography>{" "}
            </div>

            <div>
              <TextField
                required
                id="outlined-required"
                label="Nume"
                defaultValue="Nume"
              />
              <TextField
                required
                id="outlined-required"
                label="Prenume"
                defaultValue="Prenume"
              />
            </div>

            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
              />
              <TextField
                required
                id="outlined-required"
                label="Parola"
                defaultValue="Parola"
              />
            </div>

            <div className="form-group p-4" style={{ margin: "1.2em 8em" }}>
              <Button
                style={{ width: " 40em", height: "8ch" }}
                variant="outlined"
                href="/"
              >
                Logare
              </Button>
            </div>

            <div style={{ margin: "1.6em 14em" }}>
              <Typography variant="h6" component="div">
                SAU
              </Typography>{" "}
            </div>

            <div style={{ margin: "1.2em 7.5em" }} className="form-group p-4">
              <GoogleLoginButton onClick={() => alert("Hello")} />
            </div>

            <div style={{ margin: "1.2em 7.5em" }} className="form-group p-4">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div style={{ margin: "1.2em 7.5em" }} className="form-group p-4">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>

          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Inregistrare;
