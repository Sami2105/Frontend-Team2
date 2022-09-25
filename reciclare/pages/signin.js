import React from "react";
import Layout from "components/layout/Layout";
import { Grid } from "@material-ui/core";

import SignIn from "../components/SignIn";
export default function SignInPage() {
  return (
    <Layout title="Logare" description="Logare">
      <Grid container rowSpacing={1} justify="center">
        <Grid item xs={6}>
          <SignIn />
        </Grid>
      </Grid>
    </Layout>
  );
}
