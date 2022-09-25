import Layout from "components/layout/Layout";
import Cards from "components/layout/Card";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Products from "../components/Products";
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

const Anunturi = () => {
  const classes = useStyles();
  // use your picture

  return (
    <Layout
      // type your page title and page description.
      title="Anunțuri"
      description="Unii donează, unii caută donatori."
    >
      <Grid container>
        <Grid item>
          <Typography align="center" variant="h1" gutterBottom>
            Anunțuri <br></br>
          </Typography>
          <Typography align="center" variant="h5" gutterBottom>
            Aici este locul perfect <br></br>
            unde poți DONA produse dar și unde poți PRIMI <br></br>
            prin donație produsele de care ai nevoie.
          </Typography>

          <Grid container>
            <Grid item>
              <Typography align="center" gutterBottom>
                Status anunț
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Activ"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Inactiv"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item>
              <Typography align="center" gutterBottom>
                Categorie anunț
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Donare"
                />
                <FormControlLabel control={<Checkbox />} label="Căutare" />
              </FormGroup>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item>
              <Typography align="center" gutterBottom>
                Categorie produs
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Mobilă"
                />
                <FormControlLabel control={<Checkbox />} label="Mobilă" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Mobilă"
                />
                <FormControlLabel control={<Checkbox />} label="Mobilă" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Mobilă"
                />
                <FormControlLabel control={<Checkbox />} label="Mobilă" />
              </FormGroup>
            </Grid>

            <Grid item>
              <Typography align="center" gutterBottom></Typography>
              <FormGroup></FormGroup>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              style={{
                width: " 30em",
                height: "8ch",
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
              }}
              variant="outlined"
              href=""
              className="button"
            >
              Căutare
            </Button>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            Ai un produs de donat sau vrei să găsești un donator?
            <Button
              variant="outlined"
              href="/adaugaAnunt"
              style={{
                color: "#FFFFFF",
                backgroundColor: "rgba(56, 129, 103, 1)",
                padding: "0.5rem",
              }}
              className="button"
            >
              Adaugă anunț
            </Button>
            <div>
              <Products />
            </div>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Anunturi;
