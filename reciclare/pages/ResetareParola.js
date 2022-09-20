import Layout from "components/layout/Layout";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
 
}));

const ResetareParola = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // use your picture
 
  return (
    <Layout
      // type your page title and page description.
      title=" Resetare parolă "
    >
      <Container maxWidth="lg">
        <Grid container direction="column" >
          <Grid item>


          <Typography variant="h1" align="left"  gutterBottom>
            <MenuItem style={{ margin: "0.5em 1.3em" }}>
              <Avatar /> 
            </MenuItem>
            Setări Cont  /   Resetare parolă 
            <br/>
            <Typography variant="h2" align="left">
            <Button href="SetariProfil">Profil
            </Button>
            </Typography>
            <Typography variant="h2" align="left">
            <Button href="ResetareParola">Parolă</Button>
            </Typography>
            <Typography variant="h2" align="left">
            <Button href="SetariNotificari">Notificări</Button>
            </Typography>
            </Typography>

          </Grid>
          <Grid item container  alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              
            >
             
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                Adăugați parola curentă pentru a schimba parola!
                <p> <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Parola curentă!</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                      <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                         edge="end"
                     >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                      </InputAdornment>
                     }
                        label="Parola curentă!"
                      />
                    </FormControl></p>

              <Typography variant="body1">
                <br />
                Adăugați noua parolă!
                <p> <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Parola nouă!</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                      <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                         edge="end"
                     >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                      </InputAdornment>
                     }
                        label="Parola nouă!"
                      />
                    </FormControl></p>
              </Typography>

              <Typography variant="body1">
                <br />
                Confirmați noua parolă!
                <p> <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Parola nouă!</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                      <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                         edge="end"
                     >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                      </InputAdornment>
                     }
                        label="Parola nouă!"
                      />
                    </FormControl></p>
              </Typography>
              <br />
              <Stack direction="row" spacing={12}>
              <Button variant="contained">
                Anulează
              </Button>
              <Button variant="contained">
                Salvează
              </Button>
              </Stack>

              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ResetareParola;
