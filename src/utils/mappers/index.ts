import {
  ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA,
  ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE
} from 'graphql/generated/globalTypes'
import { QueryEpisodeBySlug_episodes } from 'graphql/generated/QueryEpisodeBySlug'
import {
  QueryHome_callToAction_Section,
  QueryHome_extraHighLightFragment_Section,
  QueryHome_featuredPodcasts_Section,
  QueryHome_selectedPodcastsFragment_Section,
  QueryHome_rodapeFragment_links,
  QueryHome_menuFragment_menu,
  QueryHome_siteInfroFragment_Section_ComponentSiteIntro
} from 'graphql/generated/QueryHome'
import {
  QueryPodCastBySlug_podcasts,
  QueryPodCastBySlug_podcasts_episodes
} from 'graphql/generated/QueryPodCastBySlug'
import { QueryPostBySlug_posts } from 'graphql/generated/QueryPostBySlug'
import { QuerySobre_sobre } from 'graphql/generated/QuerySobre'
import { title } from 'process'
import { getPublicUrl, exibirNovoEpisodio } from 'utils/getPublicUrl'

export const featuredPodcastMapper = (
  featuredPodcast: (QueryHome_featuredPodcasts_Section | null)[] | undefined
) => {
  const regex = /(?<=src=").*?(?=[\\*"])/
  return featuredPodcast
    ? featuredPodcast
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSectionFeaturedPodcast') {
            return obj
          }
        })
        .map((podFeat) => ({
          sectionTitle: podFeat?.sectionTitle,
          background: `${getPublicUrl(podFeat?.background?.url)}`,
          description: podFeat?.description,
          showLastEpisode: podFeat?.showLastEpisode,
          podcast: {
            title: podFeat?.podcast?.title,
            subtitle: podFeat?.podcast?.subtitle,
            cover: `${getPublicUrl(podFeat?.podcast?.cover?.url)}`,
            description: podFeat?.podcast?.description,
            slug: podFeat?.podcast?.slug,
            categories: podFeat?.podcast?.categories,
            lastEpisode: {
              embedUrl: podFeat?.showLastEpisode
                ? regex.exec(podFeat?.podcast?.episodes[0]?.embed || '')
                : null
            }
          }
        }))[0]
    : {}
}

export const selectedPodcastMapper = (
  selectedPodcast:
    | (QueryHome_selectedPodcastsFragment_Section | null)[]
    | undefined
) => {
  return selectedPodcast
    ? selectedPodcast
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSectionSelectedEpisodes') {
            return obj
          }
        })[0]
        ?.episodes.map((podSelect) => ({
          id: podSelect?.id,
          slug: podSelect?.slug,
          title: podSelect?.title,
          img: `${getPublicUrl(podSelect?.cover?.url)}`,
          podcast: podSelect?.podcast?.title,
          slugPodcast: podSelect.podcast?.slug,
          ribbon: `${exibirNovoEpisodio(podSelect?.releaseDate)}`
        }))
    : []
}

export const siteIntroMapper = (
  siteIntro:
    | (QueryHome_siteInfroFragment_Section_ComponentSiteIntro | null)[]
    | undefined
) => {
  const regex = /(?<=src=").*?(?=[\\*"])/
  return siteIntro
    ? siteIntro
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSiteIntro') {
            return obj
          }
        })
        .map((intro) => ({
          call: intro?.call,
          description: intro?.description,
          hasDetail: intro?.hasDetail,
          embedUrl: regex.exec(intro?.embed || '')
        }))[0]
    : {}
}

export const extraHighLightMapper = (
  extraHighlight:
    | (QueryHome_extraHighLightFragment_Section | null)[]
    | undefined
) => {
  const regex = /(?<=src=").*?(?=[\\*"])/
  return extraHighlight
    ? extraHighlight
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSectionExtra') {
            return obj
          }
        })
        ?.map((extra) => ({
          cover: `${getPublicUrl(extra?.cover?.url)}`,
          title: extra?.title,
          subtitle: extra?.subtitle,
          primaryInfo: extra?.primaryInfo,
          secondaryInfo: extra?.secondaryInfo,
          embedUrl: regex.exec(extra?.embed || ''),
          link: extra?.link
        }))[0]
    : {}
}

export const callToActionMapper = (
  callToAction: (QueryHome_callToAction_Section | null)[] | undefined
) => {
  return callToAction
    ? callToAction
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSectionCallToAction') {
            return obj
          }
        })
        ?.map((call) => ({
          title: call?.title,
          listLinks: call?.listLinks?.map((link) => ({
            label: link?.label,
            url: `${getUrlWithPrefixByType(
              link?.type,
              link,
              link?.pagina_interna
            )}`,
            type: link?.type
          }))
        }))[0]
    : null
}
export const headerPodcastMapper = (
  header: (QueryPodCastBySlug_podcasts | null)[] | null | undefined
) => {
  return header
    ? header.map((podcast) => ({
        img: `${getPublicUrl(podcast?.cover?.url)}`,
        cover: `${getPublicUrl(podcast?.cover?.url)}`,
        title: podcast?.title,
        subtitle: podcast?.subtitle,
        description: podcast?.description,
        releaseDate: podcast?.published_at,
        from: podcast?.producer,
        categories: podcast?.categories
      }))[0]
    : null
}

export const podcastEpisodesMapper = (
  episodes: (QueryPodCastBySlug_podcasts_episodes | null)[] | null | undefined
) => {
  return episodes
    ? episodes.map((episodio) => ({
        id: episodio?.id,
        slug: episodio?.slug,
        img: `${getPublicUrl(episodio?.cover?.url)}`,
        title: episodio?.title,
        number: episodio?.episodeNumber,
        podcast: episodio?.podcast?.title,
        slugPodcast: episodio?.podcast?.slug,
        releaseDate: episodio?.releaseDate,
        description: episodio?.extraContent
      }))
    : null
}

export const linksMenuMapper = (
  linksMenu: (QueryHome_menuFragment_menu | null)[] | null | undefined
) => {
  return linksMenu
    ? linksMenu?.map((link) => ({
        label: link?.label,
        url: `${getUrlWithPrefixByTypeMenu(
          link?.type,
          link,
          link?.pagina_interna
        )}`,
        type: link?.type
      }))
    : null
}
function getUrlWithPrefixByTypeMenu(
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE | undefined,
  link: QueryHome_menuFragment_menu | null,
  pagina_interna:
    | ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA
    | null
    | undefined
) {
  let url = ''
  switch (type) {
    case ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE.generico:
      url = `/post/${link?.pagina_generica?.slug}`
      break

    case ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE.externo:
      url = `${link?.url}`
      break

    case ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE.interno:
      url = pagina_interna == 'inicial' ? `/` : `/${pagina_interna}`
      break
    default:
      break
  }
  return url
}

export const linksFooterMapper = (
  linksFooter: (QueryHome_rodapeFragment_links | null)[] | null | undefined
) => {
  return linksFooter
    ? linksFooter?.map((link) => ({
        label: link?.label,
        url: `${getUrlWithPrefixByType(
          link?.type,
          link,
          link?.pagina_interna
        )}`,
        type: link?.type
      }))
    : null
}

function getUrlWithPrefixByType(
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE | undefined,
  link: QueryHome_rodapeFragment_links | null,
  pagina_interna:
    | ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA
    | null
    | undefined
) {
  let url = ''
  switch (type) {
    case ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE.generico:
      url = `/post/${link?.pagina_generica?.slug}`
      break

    case ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE.externo:
      url = `${link?.url}`
      break

    case ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE.interno:
      url = `/${pagina_interna}`
      break
    default:
      break
  }
  return url
}

export const headerPostMapper = (
  header: (QueryPostBySlug_posts | null)[] | undefined
) => {
  return header
    ? header.map((post) => ({
        img: `${getPublicUrl(post?.cover?.url)}`,
        title: post?.title,
        summary: post?.summary,
        content: post?.content,
        releaseDate: new Intl.DateTimeFormat('pt-BR', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }).format(new Date(post?.published_at)),
        from: post?.author?.name,
        categories: post?.categorias
      }))[0]
    : null
}

export const headerEpisodeMapper = (
  header: (QueryEpisodeBySlug_episodes | null)[] | undefined
) => {
  const regex = /(?<=src=").*?(?=[\\*"])/
  return header
    ? header.map((episode) => ({
        title: episode?.title,
        episodeNumber: episode?.episodeNumber,
        embedUrl: regex.exec(episode?.embed || ''),
        releaseDate: new Intl.DateTimeFormat('pt-BR', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }).format(new Date(episode?.releaseDate)),
        content: episode?.extraContent,
        categories: episode?.categories
      }))[0]
    : null
}

export const sobreMapper = (sobre: (QuerySobre_sobre | null) | undefined) => {
  const regex = /(?<=src=").*?(?=[\\*"])/
  return sobre
    ? {
        header: {
          img: '',
          embedUrl: regex.exec(sobre?.embed),
          title: sobre?.Title,
          summary: sobre?.Summary
        },
        members: sobre?.Members?.map((membro) => ({
          id: membro?.id,
          name: membro?.name,
          avatar: membro?.avatar?.url,
          bio: membro?.bio,
          networks: membro?.links?.map((link) => ({
            name: link?.network,
            url: link?.url
          }))
        }))
      }
    : null
}


export const contatoMapper = (contato: (QueryContato_contato | null) | undefined) => {
  return contato
    ? {
        title: contato?.Title,
        description: contato?.Description
      }
    : null
}
