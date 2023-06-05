import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import NavBar from "../../UI/components/NavBar";
import { NavBar, Footer } from "@ui/components";
import { DRAWER_WIDTH } from "../../../constants/index";

// const DRAWER_WIDTH: number = 250;

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
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
      <Footer hasSidebar={false}/>
    </>
  );
};

export default PageLayout;
