import React from 'react';

import {
  CardContainer,
  CardThumbnail,
  CardTitle,
  CardDescription,
  CardPlatform,
  CardGenre,
  CardDeveloper,
  CardReleaseData,
  CardGame
} from './styles';

export function Card({
  title,
  id,
  handleSpecificGame,
  thumbnail,
  short_description,
  game_url,
  genre,
  platform,
  developer,
  release_date
}) {
  return (
    <CardContainer>
      <CardThumbnail src={thumbnail} alt={title} />

      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{short_description}</CardDescription>

        <CardGenre>Gênero: {genre}</CardGenre>
        <CardPlatform>Plataforma: {platform}</CardPlatform>
        <CardDeveloper>Criadora: {developer}</CardDeveloper>
        <CardReleaseData>Data de lançamento: {release_date}</CardReleaseData>
      </div>

      <div className="platform">
        <CardGame><a href={game_url}>Ver na loja</a></CardGame>
        <CardGame onClick={() => handleSpecificGame(id)}>Visualizar detalhes</CardGame>
      </div>
    </CardContainer>
  );
}