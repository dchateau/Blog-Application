import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "../../UI/components/NavBar";
import Sidebar from "../../UI/components/Sidebar";

const DRAWER_WIDTH = 240;

type Props = {
  children: React.ReactNode;
};

const PostsLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={DRAWER_WIDTH} />
      <Sidebar drawerWidth={DRAWER_WIDTH} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "primary.main" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default PostsLayout;
