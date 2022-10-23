import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      blue: string
      grayDark: string
      greenDark: string
    }
    fonts: {
      semiBold: string
      medium: string
    }
  }
}
