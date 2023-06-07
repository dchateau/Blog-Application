import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import NavLink from "./NavLink";
import { CategoryFields } from "@typings/contentful";
import { Route } from "@typings/globals";
import CategoriesList from "../../post/components/CategoriesList";
import NavRoutes from "./NavRoutes";
import NavRoutesMobile from "./NavRoutesMobile";
const ROUTES: Route[] = [
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

type Props = {
  categories?: CategoryFields[];
  needsSidebar: boolean;
  drawerWidth?: { xs: number; sm: number; md: number; lg: number };
};

const NavBar = ({ categories, drawerWidth, needsSidebar }: Props) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  // console.log(drawerWidth);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  let widthProperties: {};
  if (needsSidebar) {
    widthProperties = {
      width: {
        // xs: `calc(100% - ${drawerWidth?.xs}px)`,
        sm: `calc(100% - ${drawerWidth?.sm}px)`,
        md: `calc(100% - ${drawerWidth?.md}px)`,
        lg: `calc(100% - ${drawerWidth?.lg}px)`,
      },
      mr: {
        // xs: `${drawerWidth?.xs}px`,
        sm: `${drawerWidth?.sm}px`,
        md: `${drawerWidth?.md}px`,
        lg: `${drawerWidth?.lg}px`,
      },
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
            sx={{ ":hover": { cursor: "default" }, ml: 1 }}
          >
            Gluo blogging
          </Typography>
          <IconButton
            sx={{ color: "white", display: { sm: "none" }, mr: 1 }}
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Box component="nav" sx={{ width: { sm: drawerWidth?.md } }}>
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth?.md,      
              },
            }}
          >
            <NavRoutesMobile
              onHandleClick={handleDrawerToggle}
              routes={ROUTES}
            />
            {categories && (
              <>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", padding: "0.5rem 0" }}
                >
                  {"Categories"}
                </Typography>
                <Divider />
                <CategoriesList categories={categories} onHandleClick={handleDrawerToggle}/>
              </>
            )}
          </Drawer>
        </Box>
        <NavRoutes routes={ROUTES} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
