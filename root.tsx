import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/resources/theme'

import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_500Medium
} from '@expo-google-fonts/montserrat'
import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode | ReactNode[]
}

export function Root ({ children }: RootProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
