import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 15rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    align-self: flex-end;
    flex-shrink: 0;
  }
`

export const Content = styled.div`
  display: block;
  position: absolute;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 0;
  z-index: 1;
  top: 0;
  left: 0;
`

export const Info = styled.a`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    text-decoration: none;
    background: ${theme.colors.darkPurple};
    padding: 2rem 1rem;
    opacity: 0;
    &:hover {
      opacity: 0.95;
    }
    transition: opacity 0.5s ease-in-out;

    ${media.greaterThan('medium')`
      padding: 5rem;
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.xxsmall};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.medium};
    `}
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const Podcast = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
