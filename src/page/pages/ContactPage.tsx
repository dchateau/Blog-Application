import React from "react";
import Grid from "@mui/material/Grid";
import PageLayout from "../layout/PageLayout";
import AppTheme from "../../../theme/AppTheme";

import type { ReactElement } from "react";

const ContactPage = (): ReactElement => {
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
          <h1>Contact page</h1>
        </Grid>
      </PageLayout>
    </AppTheme>
  );
};

export default ContactPage;
