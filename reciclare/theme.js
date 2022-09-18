import { createMuiTheme } from "@material-ui/core/styles";

const mainBlack = "#e3e6d5";
const mainWhite = "#000000";
const blue = "#008037";
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    a: {
      color: mainBlack,
    },
  },
});

export default theme;
