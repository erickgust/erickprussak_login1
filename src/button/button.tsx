import { ReactNode } from 'react'
import * as S from './button-styles'

type ButtonProps = {
  children: ReactNode | ReactNode[]
  secondary?: boolean
}

function Button ({ children, secondary }: ButtonProps) {
  return (
    <S.Button secondary={secondary}>
      <S.Text secondary={secondary}>
        {children}
      </S.Text>
    </S.Button>
  )
}

export { Button }
