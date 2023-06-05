import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import styles from "../../../styles/Home.module.css";

type Props = {
  hasSidebar: boolean;
  drawerWidth?: { xs: number; sm: number; md: number; lg: number };
};

const Footer = ({ hasSidebar, drawerWidth }: Props) => {
  let widthProperties: {} = {};
  if (hasSidebar) {
    widthProperties = {
      width: {
        xs: `calc(100% - ${drawerWidth?.xs}px)`,
        sm: `calc(100% - ${drawerWidth?.sm}px)`,
        md: `calc(100% - ${drawerWidth?.md}px)`,
        lg: `calc(100% - ${drawerWidth?.lg}px)`,
      },
      mr: {
        xs: `${drawerWidth?.xs}px`,
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
        {/* style={widthProperties} */}
        <p>Gluo blogging</p>
        <p>All rights reserved ({new Date().getFullYear()})</p>
        <p>Mexico</p>
      </Grid>
    </footer>
  );
};

export default Footer;
