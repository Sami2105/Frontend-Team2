import React from 'react';
import Link from "components/Link";
import Layout from "components/layout/Layout";
import Image from 'next/image';
import logo from '/images/Logo.png';
import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { FacebookLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const LogIn= () => {
    
    
    return (
        <Layout
      // type your page title and page description.
      title=" Puncte de reciclare "
      description="Gaseste cele mai aproapiate puncte de colectare"
    >


         <Grid container spacing={8} justify="center" style={{ margin: "1em 1.5em" }}>

        <Grid item spacing={12} justify="center" style={{ margin: "0 2em" }}>
        
    
        <Box
       
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch',display: 'flex', flexWrap: 'wrap' },
      }}
      noValidate
      autoComplete="off"
      
       
    >
        <div style={{ margin: "0 13em" }} justify="right">
        <Image alt="Logo" src={logo} width={80} height={80} /></div>
        <div style={{ margin: "1.2em 10em" }} justify="right">
           <Typography  variant="h1" component="div">
        Logare cont
        </Typography> </div>
        <div>
      <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Email"
          sx={{ m: 1, width: '100ch' }}
        />
        
      </div>
      <div >
      <TextField
          required
          id="outlined-required"
          label="Parola"
          defaultValue="Parola"
          sx={{ m: 1, width: '25ch' }}
        />
        
      </div>
      <div className='form-group p-4' style={{ margin: "1.2em 14em" }}>
        <input type="submit" className='btn btn-success'/>
      
      </div>

      <div style={{ margin: "1.2em 14em" }} >
           <Typography  variant="h5" component="div">
       SAU
        </Typography> </div>

        <div className='form-group p-4'>
        
        <GoogleLoginButton onClick={() => alert("Hello")} />
      </div>
      <div className='form-group p-4'>
      <FacebookLoginButton onClick={() => alert("Hello")} />
      
      </div>
      <div className='form-group p-4'>
      
      <InstagramLoginButton onClick={() => alert("Hello")} />
      
      </div>
      <div style={{ margin: "1.2em 8em" , color: "blue"}} justify="right">
           <Typography  variant="h5" component="div">
        Nu ai un cont? <Link style= {{color: "blue"}} href="/Inregistrare" underline="hover">
  {'Inregistrare'}
</Link>
        </Typography> </div>
      
    </Box>
          </Grid>
        </Grid>
        
        </Layout>
    )
}

export default LogIn