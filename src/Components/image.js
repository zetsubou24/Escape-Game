import React from 'react'
import { ThemeProvider, CSSReset, theme, Image } from '@chakra-ui/core'

const IMage = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Image height="100px" width="100px" src="../images/battery.png" 
    maxHeight={10}
    maxWidth={10}
    minWidth={10}
    minHeight={10} />
  </ThemeProvider>
)
export default IMage