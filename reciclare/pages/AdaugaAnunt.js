import Link from "components/Link";
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
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import React, { useReducer } from "react";
import DropZone from "components/layout/DropZone";
import styles from "styles/Home.module.css";
const LogIn = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  // destructuring state and dispatch, initializing fileList to empty array

  return (
    <Layout
      // type your page title and page description.
      title="Adaugă anunț"
      description="Ai produse de donat sau cauți donator? Postează aici."
    >
      <Grid
        container
        spacing={8}
        justify="center"
        style={{ margin: "1em 1.5em" }}
      >
        <Grid item spacing={10} justify="center" style={{ margin: "0 2em" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "70ch",
                display: "flex",
                flexWrap: "wrap",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h1" align="center" gutterBottom>
              Adaugă anunț
            </Typography>

            <Grid
              container
              spacing={0}
              justify="center"
              style={{ margin: "1.2em 0" }}
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Obiectul donat"
                  defaultValue="Obiectul donat"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Tipul obiectului"
                  defaultValue="Tipul obiectului"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Descriere"
                  defaultValue="Descriere"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Starea obiectului"
                  defaultValue="Starea obiectului"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Dimensiuni obiect"
                  defaultValue="Dimensiuni obiect"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Greutate"
                  defaultValue="Greutate"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Număr de telefon"
                  defaultValue="Număr de telefon"
                  sx={{ m: 1, width: "100ch" }}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Adresă"
                  defaultValue="Adresă"
                  sx={{ m: 0.4, width: "100ch" }}
                />
              </div>

              <Grid container style={{ margin: "0 11rem " }}>
                <DropZone data={data} dispatch={dispatch} />
              </Grid>

              <Grid
                container
                spacing={0}
                justify="center"
                style={{ margin: "1.2em 0" }}
              >
                <Button
                  style={{ width: " 140ch", height: "8ch" }}
                  variant="outlined"
                >
                  Adaugă
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default LogIn;
