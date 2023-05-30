import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "../../UI/components/NavBar";
import Sidebar from "../../UI/components/Sidebar";
import { CategoryFields } from "@typings/contentful";

const DRAWER_WIDTH = 250;

type Props = {
  categories: CategoryFields[];
  children: React.ReactNode;
};

const PostsLayout = ({ categories, children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={DRAWER_WIDTH} needSidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "primary.main" }}
      >
        <Toolbar />
        {children}
      </Box>
      <Sidebar categories={categories} drawerWidth={DRAWER_WIDTH} />
    </Box>
  );
};

export default PostsLayout;
