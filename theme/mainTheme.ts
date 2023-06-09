import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";

export const mainTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#F2F2F2",
      dark: "#000000",
    },
    secondary: {
      main: "#A6A6A6",
      dark: "#8C0303",
      // dark: "#698EBF",
    },
  },
});
