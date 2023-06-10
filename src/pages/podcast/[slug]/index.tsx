import PodcastPage, {
  PodcastPageTemplateProps
} from 'components/templates/PodcastPage'
import {
  QueryPodCastBySlug,
  QueryPodCastBySlugVariables
} from 'graphql/generated/QueryPodCastBySlug'
import {
  QueryPodcasts,
  QueryPodcastsVariables
} from 'graphql/generated/QueryPodcasts'
import { QUERY_PODCASTS, QUERY_PODCAST_BY_SLUG } from 'graphql/queries/podcast'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import {
  headerPodcastMapper,
  linksFooterMapper,
  linksMenuMapper,
  podcastEpisodesMapper
} from 'utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: PodcastPageTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <PodcastPage {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryPodcasts,
    QueryPodcastsVariables
  >({
    query: QUERY_PODCASTS,
    variables: { limit: 7 }
  })

  const paths = data.podcasts.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryPodCastBySlug,
    QueryPodCastBySlugVariables
  >({
    query: QUERY_PODCAST_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.podcasts.length) {
    return { notFound: true }
  }

  return {
    props: {
      podcastHeader: headerPodcastMapper(data.podcasts),
      podcastEpisodes: podcastEpisodesMapper(
        data.podcasts.map((podcast) => podcast.episodes)[0] || null
      ),
      menuListLinks: linksMenuMapper(data.menuFragment?.menu) || null,
      footerListLinks: linksFooterMapper(data.rodapeFragment?.links) || null
    },
    revalidate: 60
  }
}
