import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Header = styled.View`
  flex: 2;
  background-color: ${({ theme }) => theme.colors.greenDark};
  justify-content: center;
  align-items: center;
`

export const Main = styled.View`
  flex: 3;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  padding: ${RFValue(24)}px;
`

export const LogoContainer = styled.View`
  height: ${RFPercentage(15)}px;
  width: 100%;
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: ${RFValue(16)}px;
`

export const ButtonContainer = styled.View`
  margin-top: ${RFValue(32)}px;
  width: 100%;
`
