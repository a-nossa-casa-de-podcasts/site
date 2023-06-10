import EpisodePage, {
  EpisodePageTemplateProps
} from 'components/templates/EpisodePage'
import {
  QueryEpisode,
  QueryEpisodeVariables
} from 'graphql/generated/QueryEpisode'
import {
  QueryEpisodeBySlug,
  QueryEpisodeBySlugVariables
} from 'graphql/generated/QueryEpisodeBySlug'
import { QUERY_EPISODE, QUERY_EPISODE_BY_SLUG } from 'graphql/queries/episode'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import {
  headerEpisodeMapper,
  linksFooterMapper,
  linksMenuMapper
} from 'utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: EpisodePageTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <EpisodePage {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryEpisode,
    QueryEpisodeVariables
  >({
    query: QUERY_EPISODE,
    variables: { limit: 7 }
  })
console.log("data==>", data);
  const paths = data.episodes
                    .map((episode) => (
                        { params: { slug: episode.podcast?.slug, episode_slug: episode.slug } }
                      ))
                    .filter( (path) => 
                        path.params.slug != undefined
                    );

  console.log("paths==>", paths);

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryEpisodeBySlug,
    QueryEpisodeBySlugVariables
  >({
    query: QUERY_EPISODE_BY_SLUG,
    variables: { slug: `${params?.episode_slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.episodes.length) {
    return { notFound: true }
  }

  const episodeHeader = headerEpisodeMapper(data.episodes)

  return {
    props: {
      headerProps: episodeHeader,
      content: episodeHeader?.content,
      menuListLinks: linksMenuMapper(data.menuFragment?.menu) || null,
      footerListLinks: linksFooterMapper(data.rodapeFragment?.links) || null
    },
    revalidate: 60
  }
}
