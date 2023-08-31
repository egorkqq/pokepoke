import { memo, useState } from 'react'

import { useSelectedPoke } from 'utils'

import { Name, Picture, Wrapper } from './styled'

interface PokeCardProps {
  name: string
  id: number
  onClick: (id: number | null) => void
}

export const PokeCard: React.FC<PokeCardProps> = memo(({ name, id, onClick }) => {
  const [imageError, setImageError] = useState(false)
  const { poke } = useSelectedPoke()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClick(id)
    }
  }

  return (
    <Wrapper selected={id === poke} onClick={() => onClick(id)} onKeyDown={handleKeyDown} tabIndex={0}>
      <Picture
        onError={() => setImageError(true)}
        src={
          !imageError
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
            : 'https://placehold.co/200@2x/0B0B0D/FAFAFA?text=No\nPokeImage&font=roboto'
        }
      />
      <Name>{name}</Name>
    </Wrapper>
  )
})
