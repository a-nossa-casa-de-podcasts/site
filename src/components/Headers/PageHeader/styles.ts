import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray};
    span {
      font-size: ${theme.font.sizes.xxsmall};
    }
    h2 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.xxsmall};
      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.medium};
        line-height: ${theme.font.sizes.medium};
        margin-bottom: ${theme.spacings.xxsmall};
      `}
    }
    p {
      font-size: ${theme.font.sizes.xsmall};
    }
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 18vh;
      background: ${theme.colors.lightGray};
      position: absolute;
      top: 0;
      left: 0;
      z-index: ${theme.layers.zero};
    }
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 25vh;
      background-image: url('/img/sound-wave-medium.svg');
      background-size: contain;
      position: absolute;
      top: 6rem;
      left: 0;
    }

    > div {
      position: relative;
      z-index: ${theme.layers.base};
    }
  `}
`
export const Banner = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 18vh;
    left: calc(-${theme.grid.collumn}*2);
    img {
      object-fit: contain;
    }
    ${media.lessThan('medium')`
      left: -${theme.grid.gutter};
      height: 10vh;
      >div{
        min-height: auto;
      }
    `}
    ${media.greaterThan('medium')`
      height: 35vh;
      left: -15rem;
      img {
        object-fit: 100%;
      }
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    align-content: space-between;
    z-index: ${theme.layers.base};
    ${media.lessThan('medium')`
      margin-top: 1rem;
    `}
  `}
`

export const ContentText = styled.div``

export const Categories = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    ul {
      display: flex;
      list-style: none;
      li {
        margin-right: 1rem;
        a {
          font-size: ${theme.font.sizes.xxsmall};
          color: ${theme.colors.black};
          font-weight: ${theme.font.bold};
          text-transform: uppercase;
          text-decoration: none;
          border: 0.3rem solid black;
          padding: 0.5rem;
          transition: all 0.5s ease-in-out;
          &:hover {
            background: ${theme.colors.black};
            color: ${theme.colors.white};
            transition: all 0.5s ease-in-out;
          }
        }
      }
    }
  `}
`
