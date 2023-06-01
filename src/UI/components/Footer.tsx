import React from "react";
import styles from "../../../styles/Home.module.css";

type Props = {
  hasSidebar: boolean;
  drawerWidth: number
};

const Footer = ({ hasSidebar, drawerWidth }: Props) => {
  let widthProperties: {} = {};
  if (hasSidebar) {
    widthProperties = {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: `${drawerWidth}px`,
      backgroundColor: "black",
      
    };
  } else {
    widthProperties = {
      width: "100%",
      backgroundColor: "black",
    };
  }

  return (
    <footer className={styles.mainFooter} style={widthProperties}>
      <p>Gluo blogging</p>
      <p>All rights reserved ({new Date().getFullYear()})</p>
      <p>Mexico</p>
    </footer>
  );
};

export default Footer;
