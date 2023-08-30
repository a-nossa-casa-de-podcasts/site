/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE, ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryContato
// ====================================================

export interface QueryContato_contato {
  __typename: "Contato";
  Title: string | null;
  Description: string | null;
}

export interface QueryContato_menuFragment_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryContato_menuFragment_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QueryContato_menuFragment_menu_pagina_generica | null;
}

export interface QueryContato_menuFragment {
  __typename: "BarraLateral";
  menu: (QueryContato_menuFragment_menu | null)[] | null;
}

export interface QueryContato_rodapeFragment_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryContato_rodapeFragment_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QueryContato_rodapeFragment_links_pagina_generica | null;
}

export interface QueryContato_rodapeFragment {
  __typename: "Rodape";
  links: (QueryContato_rodapeFragment_links | null)[] | null;
}

export interface QueryContato {
  contato: QueryContato_contato | null;
  menuFragment: QueryContato_menuFragment | null;
  rodapeFragment: QueryContato_rodapeFragment | null;
}
