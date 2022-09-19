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
          <Typography variant="h1" align="center" gutterBottom>
           Adaugă anunț
            </Typography>

        <Grid container spacing={0} justify="center" style={{ margin: "1.2em 0" }}>
        <div>
      <TextField
          required
          id="outlined-required"
          label="Obiectul donat"
          defaultValue="Obiectul donat"
          sx={{ m: 1, width: '100ch' }}
        />       
      </div>

      <div >
      <TextField
          required
          id="outlined-required"
          label="Tipul obiectului"
          defaultValue="Tipul obiectului"
          sx={{ m: 1, width: '100ch' }}
        />       
      </div>

      <div>
      <TextField
          required
          id="outlined-required"
          label="Descriere"
          defaultValue="Descriere"
          sx={{ m: 1, width: '100ch' }}
        />   
      </div>

      <div>
      <TextField
          required
          id="outlined-required"
          label="Starea obiectului"
          defaultValue="Starea obiectului"
          sx={{ m: 1, width: '100ch' }}
        />   
      </div>

      <div>
      <TextField
          required
          id="outlined-required"
          label="Dimensiuni obiect"
          defaultValue="Dimensiuni obiect"
          sx={{ m: 1, width: '100ch' }}
        />
      </div>

      <div>
      <TextField
          required
          id="outlined-required"
          label="Greutate"
          defaultValue="Greutate"
          sx={{ m: 1, width: '100ch' }}
        />
      </div>

      <div>
      <TextField
          required
          id="outlined-required"
          label="Număr de telefon"
          defaultValue="Număr de telefon"
          sx={{ m: 1, width: '100ch' }}
        />
      </div>

      <div>
      <TextField
          required
          id="outlined-required"
          label="Adresă"
          defaultValue="Adresă"
          sx={{ m: 0.4, width: '100ch' }}
        />
      </div>
      
      <Grid container spacing={0} justify="center" style={{ margin: "1.2em 0" }}>
      <Button 
      style = {{width: ' 140ch',height: '8ch' }}
       variant="outlined"  >Adaugă</Button>
      </Grid>

     </Grid>

     
      
    </Box>
          </Grid>
        </Grid>
        
        </Layout>
    )
}

export default LogIn