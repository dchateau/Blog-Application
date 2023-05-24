import React from "react";
import Grid from "@mui/material/Grid";
import PageLayout from "../layout/PageLayout";
import AppTheme from "../../../theme/AppTheme";

const AboutUsPage = () => {
  return (
    <AppTheme>
      <PageLayout>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "calc(100vh - 110px)" }}
        >
          <h1>About us page</h1>
        </Grid>
      </PageLayout>
    </AppTheme>
  );
};

export default AboutUsPage;
