import Link from "next/link";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { routes } from "data/routes";
import { Container, Typography, Avatar } from "@material-ui/core";
import logo from "/images/Logo.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import Button from "@mui/material/Button";
const Cardd = () => {
  const router = useRouter();
  const path = routes;
  return (
    <Grid container justify="center" spacing={2}>
      {path.ARTICLES.map(({ photo, name, link, descriere }) => (
        <Card sx={{ maxWidth: 300, m: 1 }}>
          <Image alt="Logo" src={logo} />
          <CardContent>
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom:
                      router.pathname === link && "1px solid #e3e6d5",
                  }}
                >
                  {name}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary">
                {descriere}
              </Typography>
            </Grid>
          </CardContent>
          <CardActions>
            <Button color="secondary" size="small" href={link}>
              Mai mult...
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

export default Cardd;
