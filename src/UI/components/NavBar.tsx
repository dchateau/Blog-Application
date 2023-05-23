import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

type Props = {
  drawerWidth: number;
};

const NavBar = ({ drawerWidth }: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
          ml: { sm: `${drawerWidth}px` },
        },
        backgroundColor: "primary.dark"
      }}
      component="nav"
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
            <Typography variant="h5" noWrap component="div">
                Journal app
            </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
