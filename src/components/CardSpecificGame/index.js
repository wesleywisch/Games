import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

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
  CardSystemContainer,
  CardOs,
  CardProcessor,
  CardMemory,
  CardGraphics,
  CardStorage,
  CardGame,
} from './styles';

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

  let specificGameDateFormatted = new Intl.DateTimeFormat('pt-BR').format(new Date(release_date))

  return (
    <CardContainer>
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
            <CardReleaseData>Data de lançamento: {specificGameDateFormatted}</CardReleaseData>
          </div>

          {minimum_system_requirements !== undefined && minimum_system_requirements.os != null &&
            <CardSystemContainer>
              <h4>Requisitos minimos:</h4>
              <CardOs>Sistema: {minimum_system_requirements.os}</CardOs>
              <CardProcessor>Processador: {minimum_system_requirements.processor}</CardProcessor>
              <CardMemory>Memoria RAM: {minimum_system_requirements.memory}</CardMemory>
              <CardGraphics>Graficos: {minimum_system_requirements.graphics}</CardGraphics>
              <CardStorage>Armazenamento: {minimum_system_requirements.storage}</CardStorage>
            </CardSystemContainer>
          }
        </div>
        <CardThumbnail src={thumbnail} alt={title} />
      </div>


      {screenshots &&
        <div className="swiperSlides">
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
            }}
          >
            <SwiperSlide>
              <img className='swiperImg' src={screenshots[0].image} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className='swiperImg' src={screenshots[1].image} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className='swiperImg' src={screenshots[2].image} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className='swiperImg' src={screenshots[3].image} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      }
    </CardContainer>
  );
}