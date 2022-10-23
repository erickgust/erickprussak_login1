import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

type ButtonProps = {
  secondary: boolean
}

export const Button = styled.TouchableOpacity<ButtonProps>`
${({ theme, secondary }) => css`
  background-color: ${theme.colors.blue};
  width: 100%;
  padding: 8px 0;

  ${secondary && css`
    background-color: ${theme.colors.white};
    border: ${RFValue(2)}px solid ${theme.colors.blue};
  `}
`}`

type TextProps = {
  secondary: boolean
}

export const Text = styled.Text<TextProps>`${({ theme, secondary }) => css`
  color: ${secondary ? theme.colors.blue : theme.colors.white};
  font-family: ${theme.fonts.semiBold};
  text-align: center;
`}`
