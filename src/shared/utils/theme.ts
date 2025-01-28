import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      light: "#A8D5BA",
      main: "#5A8D72",
      dark: "#3B5A47",
      contrastText: "#FFFFFF",
    },
    secondary: {
      lightest: "#EFE5D5",
      light: "#D4C4A8",
      main: "#B9A688",
      dark: "#7D4F37",
      contrastText: "#000000",
    },
    background: {
      default: "#27241A",
    },
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1279,
    },
  },
});

const theme = createTheme(baseTheme, {
  typography: {
    h1: {
      fontSize: "60px",
      lineHeight: 1.5,
      fontWeight: 600,
      color: baseTheme.palette.primary.contrastText,
      fontFamily: "'Playfair Display', serif",
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "50px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
    },
    h2: {
      fontSize: "36px",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h3: {
      fontSize: "30px",
      fontWeight: 400,
      lineHeight: 1.3,
    },
  },
  variables: {
    sidebarWidth: "240px",
    headerHeight: "64px",
    input: {
      height: {
        small: "32px",
        medium: "40px",
        large: "48px",
      },
      padding: {
        small: "8px",
        medium: "12px",
        large: "16px",
      },
    },
    button: {
      height: {
        small: "32px",
        medium: "40px",
        large: "48px",
      },
      padding: {
        small: "8px 16px",
        medium: "12px 24px",
        large: "16px 32px",
      },
      fontSize: {
        small: "14px",
        medium: "16px",
        large: "18px",
      },
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 500,
        },
        secondary: {
          fontSize: "14px",
          color: "#757575",
        },
      },
    },
  },
});

export default theme;
