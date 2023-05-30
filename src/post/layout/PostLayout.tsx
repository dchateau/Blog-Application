import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "../../UI/components/NavBar";

const DRAWER_WIDTH: number = 250;

type Props = {
  children: React.ReactNode;
};

const PostLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={DRAWER_WIDTH} needSidebar={false} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "primary.main" }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default PostLayout;
