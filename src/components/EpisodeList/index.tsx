import EpisodeCard from 'components/EpisodeCard'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'

import * as S from './styles'

export type EpisodeProps = {
  id: string
  slug: string
  img: string
  title: string
  number: string
  podcast: string
  slugPodcast: string
  releaseDate: string
  description: string
}

export type EpisodeListProps = {
  items: EpisodeProps[]
}

const EpisodeList = ({ items }: EpisodeListProps) => {
  return items ? (
    <S.Wrapper>
      <h3>Episódios </h3>
      {items.map((item, index) => (
        <S.List key={index}>
          <div>
            <EpisodeCard {...item} />
          </div>
          <div>
            <span>{item.releaseDate}</span>
            <h3>

              <Link href={`../podcast/${item.slugPodcast}/${item.slug}`}>
                <a>
                  {item.podcast} #{item.number} {item.title}
                </a>
              </Link>
            </h3>
            <div>{ReactHtmlParser(item.description)}</div>
          </div>
        </S.List>
      ))}
    </S.Wrapper>
  ) : null
}

export default EpisodeList
