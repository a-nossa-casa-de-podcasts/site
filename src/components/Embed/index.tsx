import * as S from './styles'

export type EmbedProps = {
  embedUrl: string
}

const Embed = ({ embedUrl }: EmbedProps) => {
  return (
    <S.Wrapper>
      <S.Iframe
        loading="lazy"
        src={embedUrl}
        frameBorder="0"
        allow="encrypted-media"
        scrolling="no"
        width="100%"
        height="152"
      ></S.Iframe>
    </S.Wrapper>
  )
}

export default Embed
