
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

        <div className="platform">
          <CardGenre>Gênero: {genre}</CardGenre>
          <CardPlatform>{platform}</CardPlatform>
        </div>

        <CardDeveloper>Criadora: {developer}</CardDeveloper>
        <CardReleaseData>Data de lançamento: {release_date}</CardReleaseData>

      </div>
      <CardGame><a href={game_url}>Visualizar jogo</a></CardGame>
    </CardContainer>
  );
}