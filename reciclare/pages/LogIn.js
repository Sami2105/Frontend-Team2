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
      title="Logare"
      description="Logare"
    >


         <Grid container justify="center" style={{ margin: "0em 1.5em" }}>

        <Grid item spacing={10} style={{ margin: "0 2em" }}>
        
    
        <Box
       
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch',display: 'flex', flexWrap: 'wrap' },
      }}
      noValidate
      autoComplete="off"
      
       
    >
        <div style={{ margin: "0 18em" }}>
        <Image alt="Logo" align="center" src={logo} width={80} height={80} /></div>
        <div style={{ margin: "1.2em 10em" }} >
           <Typography align="center" variant="h1" component="div">
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
      <div className='form-group p-4'>
      <Button 
                            style = {{width: ' 40em',height: '8ch' }}
                            variant="outlined" href="/" >Logare</Button>
      
      </div>

      <div style={{ margin: "0.8em 18.5em" }} >
           <Typography  variant="h6" component="div">
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

      <div align=" center" style={{ margin: "2em 10em" , color: "black"}} >
           <Typography align=" center" variant="h5" component="div">
        Nu ai un cont? <a style={{ color: "blue"}} href="/Inregistrare" >{'Inregistrare'}</a>
            </Typography> 
      </div>
      
    </Box>
          </Grid>
        </Grid>
        
        </Layout>
    )
}

export default LogIn