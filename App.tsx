import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_500Medium
} from '@expo-google-fonts/montserrat'

import { theme } from './src/resources/theme'
import { Login } from './src/pages/login'
import { StatusBar } from 'expo-status-bar'

export default function App () {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light'/>
      <Login />
    </ThemeProvider>
  )
}
