import Link from 'next/link'

import Embed from 'components/Embed'
import * as S from './styles'
import React, { useState, useEffect, useRef } from 'react'

export type CategoryProps = {
  name: string
  slug: string
}

export type EpisodeHeaderProps = {
  title: string
  content: string
  releaseDate: string
  from: string
  embedUrl: string
  categories: CategoryProps[]
  episodeNumber: number
}

const EpisodeHeader = ({
  title,
  releaseDate,
  episodeNumber,
  from,
  embedUrl,
  categories
}: EpisodeHeaderProps) => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current.clientHeight)
    }, 1)
  })

  return (
    <S.Wrapper outerHeight={`${height}px`}>
      <div>
        <S.Cover>
          <Embed embedUrl={embedUrl} />
        </S.Cover>
        <S.Content>
          <S.ContentText ref={ref}>
            <span>
              {from} #{episodeNumber}
            </span>
            <h2>{title}</h2>
            <p>{releaseDate}</p>
          </S.ContentText>

          <S.Categories>
            <ul aria-labelledby="Lista de Categorias">
              {categories?.map((category, index) => (
                <li key={index}>
                  <Link href={category.slug} passHref>
                    <a target="_self">{category.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </S.Categories>
        </S.Content>
      </div>
    </S.Wrapper>
  )
}

export default EpisodeHeader
