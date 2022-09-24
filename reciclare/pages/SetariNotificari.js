import Layout from "components/layout/Layout";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import * as React from "react";

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

const setariNotificari = () => {
  const classes = useStyles();
  // use your picture

  const [state, setState] = React.useState({
    a: false,
    b: false,
    c: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Layout
      // type your page title and page description.
      title=" Setări Notificări "
    >
      <Container maxWidth="lg">
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Typography variant="h1" align="left" gutterBottom>
              <MenuItem style={{ margin: "0.5em 1.3em" }}>
                <Avatar />
              </MenuItem>
              Setări Cont / Notificări
              <br />
              <Typography variant="h2" align="left">
                <Button href="/setariProfil">Profil</Button>
              </Typography>
              <Typography variant="h2" align="left">
                <Button href="/resetareParola">Parolă</Button>
              </Typography>
              <Typography variant="h2" align="left">
                <Button href="/setariNotificari">Notificări</Button>
              </Typography>
            </Typography>
          </Grid>

          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            ></Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                <FormControl component="fieldset" variant="standard">
                  <FormLabel component="legend" variant="h2">
                    Notificări
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.a}
                          onChange={handleChange}
                          name="a"
                        />
                      }
                      label="Email"
                    />
                    <FormHelperText style={{ margin: "1em 4em" }}>
                      Veți fii anunțat prin email atunci când se postează un
                      anunț nou!
                    </FormHelperText>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.b}
                          onChange={handleChange}
                          name="b"
                        />
                      }
                      label="Anunțuri donații"
                    />
                    <FormHelperText style={{ margin: "1em 4em" }}>
                      Veți primi noi informații în legătură cu anunțurile despre
                      donații!
                    </FormHelperText>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.c}
                          onChange={handleChange}
                          name="c"
                        />
                      }
                      label="Anunțuri campanii"
                    />
                    <FormHelperText style={{ margin: "1em 4em" }}>
                      Veți primi noi informații în legătură cu anunțurile despre
                      campanii!
                    </FormHelperText>
                  </FormGroup>
                </FormControl>
                <br />
                <br />
                <Stack direction="row" spacing={30} sx={{ width: "100%" }}>
                  <Button variant="contained">Anulează</Button>
                  <Button variant="contained" onClick={handleClick}>
                    Salvează
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Notificările au fost salvate cu succes!
                    </Alert>
                  </Snackbar>
                </Stack>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default setariNotificari;
