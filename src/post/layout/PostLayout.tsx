import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import NavBar from "../../UI/components/NavBar";
import { Footer, NavBar } from "@ui/components";
import { DRAWER_WIDTH } from "../../../constants";
// const DRAWER_WIDTH: number = 250;

type Props = {
  children: React.ReactNode;
};

const PostLayout = ({ children }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar needsSidebar={false} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 0, backgroundColor: "primary.main" }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Footer hasSidebar={false} />
    </>
  );
};

export default PostLayout;
