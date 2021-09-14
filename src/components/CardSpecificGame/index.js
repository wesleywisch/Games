
import {
  CardContainer,
  CardThumbnail,
  CardTitle,
  CardDescription,
  CardShortDescription,
  CardPlatform,
  CardGenre,
  CardDeveloper,
  CardReleaseData,
  CardMinimumSystem,
  CardSystemContainer,
  CardOs,
  CardProcessor,
  CardMemory,
  CardGraphics,
  CardStorage,
  CardGame,
} from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function CardSpecificGame({
  title,
  thumbnail,
  short_description,
  description,
  game_url,
  genre,
  platform,
  developer,
  release_date,
  minimum_system_requirements,
  screenshots,
}) {
  return (
    <CardContainer className='flex'>
      <div className='header'>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardShortDescription>{short_description}</CardShortDescription>
          <CardDescription>{description}</CardDescription>
          <CardGame><a href={game_url}>Ver na loja</a></CardGame>

          <div className='dados'>
            <CardGenre>Gênero: {genre}</CardGenre>
            <CardPlatform>Plataforma: {platform}</CardPlatform>

            <CardDeveloper>Criadora: {developer}</CardDeveloper>
            <CardReleaseData>Data de lançamento: {release_date}</CardReleaseData>
          </div>

          <h4>Requisitos minimos:</h4>
          {minimum_system_requirements.map((item, key) => (
            <CardMinimumSystem key={key}>
              <CardSystemContainer>
                <CardOs>Sistema: {item.os}</CardOs>
                <CardProcessor>Processador: {item.processor}</CardProcessor>
                <CardMemory>Memoria RAM: {item.memory}</CardMemory>
                <CardGraphics>Graficos: {item.graphics}</CardGraphics>
                <CardStorage>Armazenamento: {item.storage}</CardStorage>
              </CardSystemContainer>
            </CardMinimumSystem>
          ))}
        </div>
        <CardThumbnail src={thumbnail} alt={title} />
      </div>

      {/* <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <div className='swiperDiv'>
            <img src={screenshots[0].image} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='swiper'>
              <img src={screenshots[1].image} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='swiper'>
              <img src={screenshots[2].image} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='swiper'> 
              <img src={screenshots[3].image} alt="" />
            </div>
          </SwiperSlide>
      </Swiper> */}
    </CardContainer>
  );
}