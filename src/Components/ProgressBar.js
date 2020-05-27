import React from 'react'
import { ThemeProvider, CSSReset, theme, Progress } from '@chakra-ui/core'

const ProgressBar = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Progress
      value={75}
      color="teal"
      size="md"
      display="block"
      fontWeight="bold"
      textAlign="center"
      backgroundColor="whiteAlpha.500"
      shadow={1}
    />
  </ThemeProvider>
)

export default ProgressBar
