import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { mainTheme } from "./mainTheme";

import type { ReactElement, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const AppTheme = ({ children }: Props): ReactElement => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
