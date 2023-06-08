import React from "react";
import Link from "@mui/material/Link";

import type { ReactElement } from "react";

interface Props {
  fontColor: string;
  to: string;
  title: string;
}

const NavLink = ({ fontColor, to, title }: Props): ReactElement => {
  return (
    <Link
      href={to}
      underline="hover"
      sx={{
        color: fontColor,
        textDecoration: "none",
        ":hover": { color: "#8C0303", cursor: "pointer" },
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
