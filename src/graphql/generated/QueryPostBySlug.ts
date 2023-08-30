/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE, ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPostBySlug
// ====================================================

export interface QueryPostBySlug_posts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPostBySlug_posts_author {
  __typename: "Author";
  name: string;
}

export interface QueryPostBySlug_posts_categorias {
  __typename: "Category";
  slug: string;
  name: string;
}

export interface QueryPostBySlug_posts {
  __typename: "Posts";
  cover: QueryPostBySlug_posts_cover | null;
  title: string;
  summary: string;
  content: string | null;
  published_at: any | null;
  author: QueryPostBySlug_posts_author | null;
  categorias: QueryPostBySlug_posts_categorias[];
}

export interface QueryPostBySlug_menuFragment_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryPostBySlug_menuFragment_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QueryPostBySlug_menuFragment_menu_pagina_generica | null;
}

export interface QueryPostBySlug_menuFragment {
  __typename: "BarraLateral";
  menu: (QueryPostBySlug_menuFragment_menu | null)[] | null;
}

export interface QueryPostBySlug_rodapeFragment_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryPostBySlug_rodapeFragment_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QueryPostBySlug_rodapeFragment_links_pagina_generica | null;
}

export interface QueryPostBySlug_rodapeFragment {
  __typename: "Rodape";
  links: (QueryPostBySlug_rodapeFragment_links | null)[] | null;
}

export interface QueryPostBySlug {
  posts: QueryPostBySlug_posts[];
  menuFragment: QueryPostBySlug_menuFragment | null;
  rodapeFragment: QueryPostBySlug_rodapeFragment | null;
}

export interface QueryPostBySlugVariables {
  slug: string;
}
