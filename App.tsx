import { Button, Text } from 'react-native'
import styled, { ThemeProvider } from 'styled-components/native'
import { theme } from './src/resources/theme'

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

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Text>Ester</Text>
      </Header>

      <Main>
        <Text>Selecione seu perfil abaixo para acessar sua conta:</Text>
        <Button title='Responsável'/>
        <Button title='Profissional'/>
      </Main>
    </ThemeProvider>
  )
}
