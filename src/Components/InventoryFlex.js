import React from "react";
import { ThemeProvider, CSSReset, theme, Flex } from "@chakra-ui/core";

const InventoryFlex = (props) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Flex overflow="scroll" />
    {props.elements}
  </ThemeProvider>
);

export default InventoryFlex;
