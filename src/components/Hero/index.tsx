import Heading from 'components/Heading'
import FullSection from 'components/FullSection'
import Embed from 'components/Embed'
import { ExpandMore as ExpandMoreIcon } from '@styled-icons/material-outlined/ExpandMore'
import * as S from './styles'
import React, { useRef } from 'react'

export type HeroProps = {
  call: string
  hasDetail: boolean
  description: string
  embedUrl: string
}

const Hero = ({ call, hasDetail, description, embedUrl }: HeroProps) => {
  const titleRef = useRef()

  function handleClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <S.Wrapper>
      <div className="video-header">
        <video autoPlay muted loop id="bgvid">
          <source src="video/comp.webm" type="video/webm" />
          <source src="video/comp.mp4" type="video/mp4" />
        </video>
      </div>
      <FullSection className="main" color="darkGray">
        <Heading>{call}</Heading>
        {hasDetail && (
          <ExpandMoreIcon aria-label="ver podcast" onClick={handleClick} />
        )}
      </FullSection>
      {hasDetail && (
        <div ref={titleRef}>
          <FullSection className="detail" color="darkGray">
            <Heading>{description}</Heading>
            <Embed embedUrl={embedUrl} />
          </FullSection>
        </div>
      )}
    </S.Wrapper>
  )
}
export default Hero
