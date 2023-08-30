import styled, { css } from 'styled-components'

// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.orange};
    form{
      color: ${theme.colors.white};
      input:-webkit-autofill,
      input:-webkit-autofill:hover, 
      input:-webkit-autofill:focus, 
      input:-webkit-autofill:active{
          -webkit-background-clip: text;
          -webkit-box-shadow: 0 0 0 0 transparent inset !important;
          -webkit-text-fill-color: white !important;
      }
      input {
        all: unset;
        border:none;
        outline: none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        width: 100%;
        display: block;
        font-size: ${theme.font.sizes.small};
        border-bottom: 1px solid ${theme.colors.white};
      }
    }
  `}
`
