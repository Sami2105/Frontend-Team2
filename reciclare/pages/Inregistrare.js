import React from "react";
import { useForm } from "react-hook-form";
import Layout from "components/layout/Layout";
import { Grid } from "@material-ui/core";
import SignUp from "../components/SignUp";

const Inregistrare = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const myfun = (d) => {
    alert(d.fullname + " form " + d.email);
  };
  return (
    <Layout title="Logare" description="Logare">
      <Grid container rowSpacing={1} justify="center">
        <Grid item xs={6}>
          <SignUp />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Inregistrare;
