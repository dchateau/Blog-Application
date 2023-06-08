import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Footer, NavBar } from "@ui/components";
import {
  DRAWER_WIDTH,
  MEDIUM_DRAWER_WIDTH,
  SMALL_DRAWER_WIDTH,
} from "../../../constants";

import type { ReactElement } from "react";
import type { DrawerWidths } from "@typings/globals";

interface Props {
  children: React.ReactNode;
}

const DRAWER_WIDTH_PROPS: DrawerWidths = {
  xs: SMALL_DRAWER_WIDTH,
  sm: MEDIUM_DRAWER_WIDTH,
  md: DRAWER_WIDTH,
  lg: DRAWER_WIDTH,
};

const PostLayout = ({ children }: Props): ReactElement => {
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

export default PostLayout;
