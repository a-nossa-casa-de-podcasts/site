/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLINKS_NETWORK, ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE, ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA } from "./globalTypes";

// ====================================================
// GraphQL query operation: QuerySobre
// ====================================================

export interface QuerySobre_sobre_Members_avatar {
  __typename: "UploadFile";
  url: string;
}

export interface QuerySobre_sobre_Members_links {
  __typename: "ComponentFragmentLinks";
  network: ENUM_COMPONENTFRAGMENTLINKS_NETWORK | null;
  url: string;
}

export interface QuerySobre_sobre_Members {
  __typename: "ComponentFragmentIntegrante";
  id: string;
  name: string;
  avatar: QuerySobre_sobre_Members_avatar | null;
  bio: string;
  links: (QuerySobre_sobre_Members_links | null)[] | null;
}

export interface QuerySobre_sobre {
  __typename: "Sobre";
  Title: string;
  Embed: string;
  Summary: string;
  Members: (QuerySobre_sobre_Members | null)[] | null;
}

export interface QuerySobre_menuFragment_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QuerySobre_menuFragment_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QuerySobre_menuFragment_menu_pagina_generica | null;
}

export interface QuerySobre_menuFragment {
  __typename: "BarraLateral";
  menu: (QuerySobre_menuFragment_menu | null)[] | null;
}

export interface QuerySobre_rodapeFragment_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QuerySobre_rodapeFragment_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QuerySobre_rodapeFragment_links_pagina_generica | null;
}

export interface QuerySobre_rodapeFragment {
  __typename: "Rodape";
  links: (QuerySobre_rodapeFragment_links | null)[] | null;
}

export interface QuerySobre {
  sobre: QuerySobre_sobre | null;
  menuFragment: QuerySobre_menuFragment | null;
  rodapeFragment: QuerySobre_rodapeFragment | null;
}
