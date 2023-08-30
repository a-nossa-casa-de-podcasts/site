import { gql } from '@apollo/client'
import { MenuFragment } from 'graphql/fragments/menu'
import { RodapeFragment } from 'graphql/fragments/rodape'

export const QUERY_CONTATO = gql`
  query QueryContato {
    contato {
      Title
      Description
    }
    menuFragment: barraLateral {
      ...MenuFragment
    }
    rodapeFragment: rodape {
      ...RodapeFragment
    }
  }
  ${MenuFragment}
  ${RodapeFragment}
`
