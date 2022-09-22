import React from 'react';
import {useForm} from 'react-hook-form';
import Layout from "components/layout/Layout";
import Image from 'next/image';
import logo from '/images/Logo.png';

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { FacebookLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Inregistrare= () => {
    const {register, handleSubmit, formState:{errors}}= useForm();
    const myfun= (d) =>{
        alert(d.fullname + ' form ' + d.email);
    }
    return (
        <Layout
      // type your page title and page description.
      title=" Puncte de reciclare "
      description="Gaseste cele mai aproapiate puncte de colectare"
    >


         <Grid container spacing={8}  style={{ margin: "1em 1.5em" }}>

        <Grid item spacing={8}  style={{ margin: "5em 1.5em" }}>
           
           <h2 className="text-xl mb-1 font-semibold">
           GO GREEN este soluția pentru o lume mai bună
                      </h2>
                      <h4 className="text-xl mb-1 font-semibold">
           GO GREEN este soluția pentru o lume mai bună
                      </h4>
                      <h4 className="text-xl mb-1 font-semibold">
           GO GREEN este soluția pentru o lume mai bună
                      </h4>
                      <h4 className="text-xl mb-1 font-semibold">
           GO GREEN este soluția pentru o lume mai bună
                      </h4>
  
          
        </Grid>

        <Grid item spacing={10} style={{ margin: "2em 2em" }}>
           
        
        </Grid>
        
        <Grid item spacing={10}  style={{ margin: "0 2em" }}>
        
        
        <Grid container spacing={8} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
       
    >
        <div style={{ margin: "0 13em" }} >
        <Image alt="Logo" src={logo} width={90} height={90} /></div>
        <div style={{ margin: "1.2em 8em" }} >
           <Typography  variant="h5" component="div">
        Creează un cont nou
        </Typography> </div>
      <div>
      <TextField
          required
          id="outlined-required"
          label="Nume complet"
          defaultValue="Nume complet"
          
        />
        
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Email"
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-required"
          label="Numar de telefon"
          defaultValue="Numar de telefon"
        />
        <TextField
          required
          id="outlined-required"
          label="Parola"
          defaultValue="Parola"
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
      
    </Box>
          </Grid>
        </Grid>
        </Grid>
        </Layout>
    )
}

export default Inregistrare