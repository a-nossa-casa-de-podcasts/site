import styled, { css } from 'styled-components'

// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.orange};
  `}
`
