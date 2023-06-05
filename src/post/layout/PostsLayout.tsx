import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Footer, NavBar, Sidebar } from "@ui/components";
// import NavBar from "../../UI/components/NavBar";
// import Sidebar from "../../UI/components/Sidebar";
import { CategoryFields } from "@typings/contentful";
import { DRAWER_WIDTH, MEDIUM_DRAWER_WIDTH, SMALL_DRAWER_WIDTH } from "../../../constants";
// const DRAWER_WIDTH: number = 250;

type Props = {
  categories: CategoryFields[];
  children: React.ReactNode;
};

const DRAWER_WIDTH_PROPS = {
  xs: SMALL_DRAWER_WIDTH,
  sm: MEDIUM_DRAWER_WIDTH,
  md: DRAWER_WIDTH,
  lg: DRAWER_WIDTH,
};

const PostsLayout = ({ categories, children }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar needsSidebar drawerWidth={DRAWER_WIDTH_PROPS} />
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
