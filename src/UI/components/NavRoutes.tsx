import React from "react";
import Grid from "@mui/material/Grid";
import NavLink from "./NavLink";

import type { ReactElement } from "react";
import type { Route } from "@typings/globals";

interface Props {
  routes: Route[];
}

const NavRoutes = ({ routes }: Props): ReactElement => {
  return (
    <Grid
      container
      component="nav"
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      {routes.map((item: Route) => {
        const route: string = item.id === "blog" ? "" : item.id;
        return (
          <NavLink
            to={`/${route}`}
            title={item.title}
            key={item.id}
            fontColor="white"
          />
        );
      })}
    </Grid>
  );
};

export default NavRoutes;
