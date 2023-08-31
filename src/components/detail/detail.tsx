import { useEffect, useState } from 'react'

import { usePokemon, useSelectedPoke } from 'utils'

import {
  DetailWrapper,
  ErrorWrapper,
  Name,
  Picture,
  Skeleton,
  StatName,
  StatValue,
  StatWrapper,
  StatsContainer,
} from './styled'

export const Detail = () => {
  const { poke } = useSelectedPoke()
  const [imageError, setImageError] = useState(false)

  const { data, error, isLoading } = usePokemon({ id: poke })

  useEffect(() => {
    setImageError(false)
  }, [poke])

  if (error) return <ErrorWrapper>Error when load data :(((</ErrorWrapper>

  if (poke === null || !data) return null

  return (
    <DetailWrapper>
      <div>
        <Name>{data?.name}</Name>
        {isLoading ? (
          <Skeleton />
        ) : (
          <Picture
            onError={() => setImageError(true)}
            src={
              !imageError
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke}.png`
                : 'https://placehold.co/200@2x/0B0B0D/FAFAFA?text=No\nPokeImage&font=roboto'
            }
          />
        )}
        <StatsContainer>
          <StatWrapper>
            <StatValue>{data?.weight || 'N/A'}</StatValue>
            <StatName>Weight</StatName>
          </StatWrapper>
          <StatWrapper>
            <StatValue>{data?.height || 'N/A'}</StatValue>
            <StatName>Height</StatName>
          </StatWrapper>
          <StatWrapper>
            <StatValue>{data?.baseExperience || 'N/A'}</StatValue>
            <StatName>Base experience</StatName>
          </StatWrapper>
        </StatsContainer>
        <StatsContainer>
          {data?.stats.map((stat) => (
            <StatWrapper>
              <StatValue>{stat.baseStat}</StatValue>
              <StatName>{formatStatName(stat.stat.name || 'N/A')}</StatName>
            </StatWrapper>
          ))}
        </StatsContainer>
      </div>
    </DetailWrapper>
  )
}

function formatStatName(name: string): string {
  if (name === 'hp') return 'HP'
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
