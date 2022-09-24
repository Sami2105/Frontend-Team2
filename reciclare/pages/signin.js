import React from 'react';
import Link from "components/Link";
import Layout from "components/layout/Layout";
import Image from 'next/image';
import logo from '/images/Logo.png';
import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { FacebookLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormDialog from "components/layout/FormDialog";
import SignIn from '../components/SignIn';
export default function SignInPage() {


  return (
    <Layout title="Logare" description="Logare">

      <Grid container rowSpacing={1} justify="center" style={{ margin: "0em 1.5em" }}>

        <Grid item xs={6}>
          <SignIn />
        </Grid>

      </Grid>

    </Layout >
  )
}