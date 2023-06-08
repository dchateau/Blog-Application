import React from "react";
import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavBar, Footer } from "@ui/components";
import {
  DRAWER_WIDTH,
  MEDIUM_DRAWER_WIDTH,
  SMALL_DRAWER_WIDTH,
} from "../../../constants";

interface Props {
  children: React.ReactNode;
};

const DRAWER_WIDTH_PROPS = {
  xs: SMALL_DRAWER_WIDTH,
  sm: MEDIUM_DRAWER_WIDTH,
  md: DRAWER_WIDTH,
  lg: DRAWER_WIDTH,
};

const PageLayout = ({ children }: Props): ReactElement => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar needsSidebar={false} drawerWidth={DRAWER_WIDTH_PROPS} />
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

export default PageLayout;
