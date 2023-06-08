import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Footer, NavBar, Sidebar } from "@ui/components";

import { DRAWER_WIDTH, MEDIUM_DRAWER_WIDTH, SMALL_DRAWER_WIDTH } from "../../../constants";

import type { CategoryFields } from "@typings/contentful";
import type { DrawerWidths } from "@typings/globals";

type Props = {
  categories: CategoryFields[];
  children: React.ReactNode;
};

const DRAWER_WIDTH_PROPS: DrawerWidths = {
  xs: SMALL_DRAWER_WIDTH,
  sm: MEDIUM_DRAWER_WIDTH,
  md: DRAWER_WIDTH,
  lg: DRAWER_WIDTH,
};

const PostsLayout = ({ categories, children }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar needsSidebar categories={categories} drawerWidth={DRAWER_WIDTH_PROPS} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, backgroundColor: "primary.main" }}
        >
          <Toolbar />
          {children}
        </Box>
        <Sidebar
          categories={categories}
          drawerWidth={DRAWER_WIDTH_PROPS}
        />
      </Box>
      <Footer hasSidebar drawerWidth={DRAWER_WIDTH_PROPS} />
    </>
  );
};

export default PostsLayout;
