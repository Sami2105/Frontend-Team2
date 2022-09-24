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
import SignUp from '../components/SignUp';

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
    <Layout title="Logare" description="Logare">

      <Grid container rowSpacing={1} justify="center" style={{ margin: "0em 1.5em" }}>

        <Grid item xs={6}>
          <SignUp />
        </Grid>

      </Grid>

    </Layout >
  )
};

export default Inregistrare;
