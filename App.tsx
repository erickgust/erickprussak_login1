import { Button, Text } from 'react-native'
import styled, { ThemeProvider } from 'styled-components/native'
import { theme } from './src/resources/theme'
import Logo from './src/ui/logo'

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

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>

      <Main>
        <Text>Selecione seu perfil abaixo para acessar sua conta:</Text>
        <Button title='Responsável'/>
        <Button title='Profissional'/>
      </Main>
    </ThemeProvider>
  )
}
