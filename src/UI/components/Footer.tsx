import React from "react";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/material";

import styles from "../../../styles/Home.module.css";

import type { ReactElement } from "react";
import type { DrawerWidths } from "@typings/globals";

interface Props {
  hasSidebar: boolean;
  drawerWidth?: DrawerWidths;
}

const Footer = ({ hasSidebar, drawerWidth }: Props): ReactElement => {
  let widthProperties: SxProps = {};

  if (hasSidebar) {
    widthProperties = {
      width: {
        sm: `calc(100% - ${drawerWidth?.sm}px)`,
        md: `calc(100% - ${drawerWidth?.md}px)`,
        lg: `calc(100% - ${drawerWidth?.lg}px)`,
      },
      mr: {
        sm: `${drawerWidth?.sm}px`,
        md: `${drawerWidth?.md}px`,
        lg: `${drawerWidth?.lg}px`,
      },
      backgroundColor: "black",
    };
  } else {
    widthProperties = {
      width: "100%",
      backgroundColor: "black",
    };
  }

  return (
    <footer className={styles.mainFooterText}>
      <Grid
        container
        sx={{
          ...widthProperties,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { sm: "row", md: "row", lg: "row-reverse" },
          padding: "0 2rem",
        }}
      >
        <p>Gluo blogging</p>
        <p>All rights reserved ({new Date().getFullYear().toString()})</p>
        <p>Mexico</p>
      </Grid>
    </footer>
  );
};

export default Footer;
