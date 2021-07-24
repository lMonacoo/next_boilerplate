import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJs e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Image de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  )
}

export default Main
