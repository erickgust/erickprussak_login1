import { Login } from './src/pages/login'
import { StatusBar } from 'expo-status-bar'
import { Root } from './root'

export default function App () {
  return (
    <Root>
      <StatusBar style='light'/>
      <Login />
    </Root>
  )
}
