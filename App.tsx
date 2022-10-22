import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './src/resources/theme';

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
  align-items: center;
  justify-content: center;
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledView>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </StyledView>
    </ThemeProvider>
  );
}

