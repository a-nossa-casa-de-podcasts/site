import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: stretch;
    color: ${theme.colors.white};
    column-gap: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.large};
    ${media.lessThan('medium')`
      flex-direction: column;
    `}
    ${media.between('medium', 'large')`
      column-gap: ${theme.spacings.small};
      flex-direction: column;
    `}
    /* Tablet */
    ${media.between('1111px', '1170px')`
      flex-direction: row;
      align-items: start;
    `}

    div {
      text-align: left;
      &:first-child {
        height: auto;
        max-width: 27rem;
        ${media.lessThan('medium')`
          width: 100%;
          max-width: 100%;
          margin-right: 0;
        `}
        ${media.between('medium', 'large')`
          min-width: 50vw;
        `}
        /* Tablet */
        ${media.between('1111px', '1170px')`
          min-width: auto;
        `}

        img {
          object-fit: cover;
        }
      }
      h4 {
        font-size: ${theme.font.sizes.large};
        margin-bottom: ${theme.spacings.small};
        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.medium};
          margin-bottom: ${theme.spacings.xsmall};
        `}
      }
      p {
        font-size: ${theme.font.sizes.small};
        max-width: 60rem;
        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.xsmall};
        `}
      }
    }
  `}
`
export const Networks = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 5rem 0 0;
    ${media.lessThan('medium')`
      margin: 1rem 0 0;
    `}
    a {
      text-decoration: none;
      color: ${theme.colors.white};
      margin-right: 1rem;
      transition: color 0.3s ease-in-out;
      ${media.lessThan('medium')`
        margin: 0 3rem 0 0;
      `}
      i {
        height: calc(${theme.font.sizes.medium});
        width: calc(${theme.font.sizes.medium});
      }
      &:hover {
        color: ${theme.colors.lightGreen};
      }
    }
  `}
`
