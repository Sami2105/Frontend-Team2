import Layout from "components/layout/Layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import useMediaQuery from "@mui/material/useMediaQuery";
import Snackbar from "@mui/material/Snackbar";

import { styled } from "@mui/material/styles";
import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";

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

const setariProfil = () => {
  const classes = useStyles();

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickk = () => {
    setOpen(true);
  };

  const handleClosee = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Layout
      // type your page title and page description.
      title=" Setări Profil "
    >
      <Container maxWidth="lg">
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1" align="left" gutterBottom>
              <MenuItem style={{ margin: "0.5em 1.3em" }}>
                <Avatar />
              </MenuItem>
              Setări Cont / Profil
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
          <Grid item container alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
            ></Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                <Typography variant="h2" align="left">
                  Avatar
                </Typography>
                <br />
                <MenuItem
                  sx={{ m: 1, width: "5ch" }}
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                >
                  <Avatar />
                </MenuItem>
                Schimbați avatarul!
                <p>
                  {" "}
                  <TextField
                    required
                    id="outlined-required"
                    label="Nume complet"
                    defaultValue=""
                    sx={{ width: "32ch" }}
                  />
                </p>
                <Typography variant="body1">
                  <p>
                    {" "}
                    <TextField
                      required
                      id="outlined"
                      label="Adresa"
                      defaultValue=""
                      sx={{ width: "32ch" }}
                    />
                  </p>
                </Typography>
                <Typography variant="body1">
                  <p>
                    {" "}
                    <TextField
                      id="outlined"
                      label="Nr. tel."
                      defaultValue=""
                      sx={{ width: "32ch" }}
                    />
                  </p>
                </Typography>
                <br />
                <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                  <Button variant="contained">Anulează</Button>
                  <Button variant="contained" onClick={handleClickOpen}>
                    Șterge cont
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <DialogTitle id="responsive-dialog-title">
                      {"Confirmare ștergere cont!"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Doriți să ștergeți acest cont?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        autoFocus
                        onClick={handleClose}
                        style={{ margin: "0.5em 0.5em" }}
                      >
                        Anulează
                      </Button>
                      <Button href="/" onClick={handleClose} autoFocus>
                        Șterge
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Button variant="contained" onClick={handleClickk}>
                    Salvează
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClosee}
                  >
                    <Alert
                      onClose={handleClosee}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Modificările au fost salvate cu succes!
                    </Alert>
                  </Snackbar>
                </Stack>
                <br />
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default setariProfil;
