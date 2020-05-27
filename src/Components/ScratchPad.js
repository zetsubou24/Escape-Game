import React from 'react'
import { ThemeProvider, CSSReset, theme, Textarea } from '@chakra-ui/core'

const Scratchpad = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Textarea
      placeholder="Scratch Pad"
      display="flex"
      p={5}
      overflow="scroll"
      width={900}
    />
  </ThemeProvider>
)

export default Scratchpad
