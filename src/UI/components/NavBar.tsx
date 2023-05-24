import React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

type Props = {
  drawerWidth: number;
  needSidebar: boolean;
};

type Route = {
  id: string;
  title: string;
};

const ROUTES: Array<Route> = [
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "about-us",
    title: "About us",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const NavBar = ({ drawerWidth, needSidebar }: Props) => {
  let widthProperties;
  if (needSidebar) {
    widthProperties = {
      width: `calc(100% - ${drawerWidth}px)`,
      mr: `${drawerWidth}px`,
      backgroundColor: "primary.dark",
    };
  } else {
    widthProperties = {
      width: "100%",
      backgroundColor: "primary.dark",
    };
  }

  return (
    <AppBar position="fixed" sx={widthProperties} component="nav">
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            color="white"
            fontWeight="bold"
            variant="h5"
            noWrap
            component="div"
          >
            Gluo blogging
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {ROUTES.map((item: Route) => {
            const route: string = item.id === "blog" ? "" : item.id;
            return (
              <Link
                underline="hover"
                href={`/${route}`}
                sx={{
                  textDecoration: "none",
                  ":hover": { color: "#8C0303", cursor: "pointer" },
                }}
                key={item.id}
              >
                {item.title}
              </Link>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
