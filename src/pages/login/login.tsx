import Logo from '../../ui/logo'
import { Button } from '../../button'
import * as S from './login-styles'

export function Login () {
  return (
    <>
      <S.Header>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
      </S.Header>

      <S.Main>
        <S.Description>
          Selecione seu perfil abaixo para acessar sua conta:
        </S.Description>

        <Button>Responsável</Button>
        <Button secondary>Profissional</Button>
      </S.Main>
    </>
  )
}
