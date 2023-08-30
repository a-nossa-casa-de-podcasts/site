import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.section`
  ${({ theme }) => css`
    text-align: center;
    ${media.greaterThan('medium')`
      z-index: ${theme.layers.base};
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
      ${media.greaterThan('medium')`
      z-index: ${theme.layers.base};
    `}
  `}
`
