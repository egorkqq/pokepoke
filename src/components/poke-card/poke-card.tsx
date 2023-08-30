import { useState } from "react";
import { Name, Picture, Wrapper } from "./styled";

interface PokeCardProps {
  name: string;
  id: number;
}

export const PokeCard: React.FC<PokeCardProps> = ({ name, id }) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Wrapper>
      <Picture
        onError={() => setImageError(true)}
        src={
          !imageError
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
            : "https://placehold.co/200@2x/0B0B0D/FAFAFA?text=No\nPokeImage&font=roboto"
        }
      />
      <Name>{name}</Name>
    </Wrapper>
  );
};
