import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      light: "#6B6A68",
      main: "#3E3D3A",
      dark: "#27241A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      lightest: "#EFE5D5",
      light: "#D4C4A8",
      main: "#CEB78D",
      dark: "#7D4F37",
      contrastText: "#FFFFFF",
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
    fontFamily: "Playfair Display, serif",
    h1: {
      fontSize: "60px",
      lineHeight: 1.5,
      fontWeight: 600,
      color: baseTheme.palette.secondary.light,
      fontFamily: "'Playfair Display', serif",
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "50px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
    },
    h2: {
      fontSize: "40px",
      fontWeight: 500,
      lineHeight: 1.4,
      color: baseTheme.palette.primary.dark,
      textTransform: "capitalize",
      fontFamily: "'Playfair Display', serif",
      marginBottom: baseTheme.spacing(4),
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "36px",
      },
      [baseTheme.breakpoints.down("md")]: {
        marginBottom: baseTheme.spacing(2),
        fontSize: "32px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "28px",
      },
    },
    h3: {
      fontSize: "32px",
      fontWeight: 300,
      lineHeight: 1.3,
      color: baseTheme.palette.primary.dark,
      fontFamily: "'Playfair Display', serif",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "28px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "24px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    h4: {
      fontSize: "22px",
      fontWeight: 300,
      lineHeight: 1.3,
      color: baseTheme.palette.primary.dark,
      fontFamily: "'Playfair Display', serif",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "20px",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
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
    MuiButton: {
      styleOverrides: {
        root: {
          color: baseTheme.palette.primary.contrastText,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
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
