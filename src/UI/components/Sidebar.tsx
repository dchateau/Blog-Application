import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CategoriesList from "../../post/components/CategoriesList";

import type { ReactElement } from "react";
import type { SxProps } from "@mui/material";
import type { CategoryFields } from "@typings/contentful";
import type { DrawerWidths } from "@typings/globals";

interface Props {
  categories: CategoryFields[];
  drawerWidth: DrawerWidths;
}

const Sidebar = ({ categories, drawerWidth }: Props): ReactElement => {
  let widthProperties: SxProps = {
    width: { ...drawerWidth },
  };

  return (
    <Box
      component="nav"
      sx={{
        ...widthProperties,
        display: { xs: "none", sm: "block" },
      }}
    >
      <Drawer
        sx={{
          ...widthProperties,
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", ...widthProperties },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "secondary.main",
            alignItems: "center",
            padding: 0,
            margin: 0,
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar>
          <Typography variant="h6" align="right" sx={{ fontWeight: "bold" }}>
            {"Categories"}
          </Typography>
        </Toolbar>
        <Divider />
        <CategoriesList categories={categories} />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
