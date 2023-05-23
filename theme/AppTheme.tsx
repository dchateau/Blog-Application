import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { mainTheme } from "./mainTheme";

type Props = {
  children?: React.ReactNode;
};
const AppTheme= ({ children }: Props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
