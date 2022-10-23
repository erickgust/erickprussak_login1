import { Button } from 'react-native'
import styled, { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_500Medium
} from '@expo-google-fonts/montserrat'
import { theme } from './src/resources/theme'
import Logo from './src/ui/logo'
import { RFValue } from 'react-native-responsive-fontsize'

const Header = styled.View`
  flex: 2;
  background-color: ${({ theme }) => theme.colors.greenDark};
  justify-content: center;
  align-items: center;
`

const Main = styled.View`
  flex: 3;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
`

const LogoContainer = styled.View`
  max-width: 35%;
  width: 100%;
`

const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: ${RFValue(14)}px;
`

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
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>

      <Main>
        <Description>Selecione seu perfil abaixo para acessar sua conta:</Description>
        <Button title='Responsável'/>
        <Button title='Profissional'/>
      </Main>
    </ThemeProvider>
  )
}
