import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import data from "../../../public/data.json";
import CategoriesList from "../../post/components/CategoriesList";
import { CategoryFields } from "@typings/contentful";

type Props = {
  categories: CategoryFields[];
  drawerWidth: { xs: number; sm: number; md: number; lg: number };
};

const Sidebar = ({ categories, drawerWidth }: Props) => {
  // const categories = data.filter(
  //   (item) => item.sys.contentType.sys.id === "category"
  // );
  // item.sys.contentType.sys.id
  // console.log("Categories: ", categories);

  return (
    <Box
      component="nav"
      sx={{
        width: drawerWidth,
        flexShrink: { sm: 1 },
      }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "secondary.main",
            alignItems: "center",
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
