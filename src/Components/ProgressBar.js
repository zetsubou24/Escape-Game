import React from 'react'
import { ThemeProvider, CSSReset, theme, Progress } from '@chakra-ui/core'

const ProgressBar = (props) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Progress
      value={((props.value-1)/6)*100}
      color="teal"
      size="lg"
      display="block"
      fontWeight="bold"
      textAlign="center"
      backgroundColor="whiteAlpha.500"
      shadow={1}
    />
  
  </ThemeProvider>
)

export default ProgressBar
