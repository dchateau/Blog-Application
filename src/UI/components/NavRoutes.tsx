import React from 'react'
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import NavLink from './NavLink';

import type{Route} from "@typings/globals";

type Props = {
    routes: Route[];
}

const NavRoutes = ({routes}: Props) => {
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
              // <Link
              //   underline="hover"
              //   href={`/${route}`}
              //   sx={{
              //     textDecoration: "none",
              //     ":hover": { color: "#8C0303", cursor: "pointer" },
              //   }}
              //   key={item.id}
                
              // >
              //   {item.title}
              // </Link>
              <NavLink
                to={`/${route}`}
                title={item.title}
                key={item.id}
                fontColor="white"
              />
            );
          })}
        </Grid>
  )
}

export default NavRoutes