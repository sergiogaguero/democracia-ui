import { ColorMode, color, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme(
    {
      initialColorMode: "light",
      useSystemColorMode: false,
      fontWeight:{
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "-0.3px",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      styles: {
        global: ({ colorMode }: { colorMode: ColorMode }) => ({
          body: {
            bg: {
              base: colorMode == "dark" ? "darkMode.500" : color.whiteSmoke,
              md: colorMode == "dark" ? "darkMode.500" : color.whiteSmoke,
            },
          },
        }),
      },
      components: {
        Text: {
          baseStyle: ({ colorMode }: { colorMode: ColorMode }) => ({
            color: colorMode === "dark" ? color.white : color.darkTeal,
          }),
        },
        Alert: {
          defaultProps: {
            borderRadius: '18px',
            border: '3px solid red'
          },
        },
        Heading: {
          baseStyle: ({ colorMode }: { colorMode: ColorMode }) => ({
            color: colorMode === "dark" ? color.white : color.darkTeal,
          }),
        },
      },
    },
  );
  
  export default customTheme;
  