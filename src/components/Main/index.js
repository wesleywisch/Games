import { useEffect, useState } from 'react';

import { Api } from '../../Services/api';
import { Spinner } from '../Spinner';

import { Card } from '../Card';
import { CardSpecificGame } from '../CardSpecificGame';

import {
  MainContainer,
  MainSidebar,
  MainSidebarContent,
  MainSidebarItem,
  MainContent,
  MainContentApiAll,
  PlatformContainer,
  PlatformHeader,
  PlatformApi,
} from './styles';

export function Main() {
  const [state, setState] = useState({ 'All': 'All' });
  const [options, setOptions] = useState('all');
  const [loading, setLoading] = useState(false);

  const [api, setApi] = useState([]);
  const [apiPlatform, setApiPlatform] = useState([]);
  const [specificGame, setSpecificGame] = useState([]);

  const buttons = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Platform' },
    { id: 3, name: 'Specific game' },
  ];

  let {
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
  } = specificGame;

  function handleOpenContainer(container) {
    setState({ [container]: container });
  }

  async function handleCallApi() {
    const storage = localStorage.getItem('@api');

    if (!storage) {
      setLoading(true);
      const response = await Api.get('/games');

      localStorage.setItem('@api', JSON.stringify(response.data));

      setApi(response.data);
      setLoading(false);
    }

    if (storage) {
      setApi(JSON.parse(storage));
    }
  }

  async function handleCallApiPlatform(e) {
    setLoading(true);
    e.preventDefault();

    const response = await Api.get(`/games?platform=${options}`);

    setApiPlatform(response.data);
    setLoading(false);
  }

  async function handleSpecificGame(id) {
    const response = await Api.get(`/game?id=${id}`);

    setSpecificGame(response.data);
    setState({ 'Specific game': 'Specific game' })
  }

  useEffect(() => {
    handleCallApi();
  }, [])

  return (
    <MainContainer>

      <MainSidebar>
        <MainSidebarContent>
          {buttons.map((button, key) => (
            <MainSidebarItem
              key={key}
              className={state && state.hasOwnProperty(button.name) ? 'active' : ''}
              onClick={() => handleOpenContainer(button.name)}
            >
              {button.name}
            </MainSidebarItem>
          ))}
        </MainSidebarContent>
      </MainSidebar>

      <MainContent>
        <MainContentApiAll>
          {state && state.hasOwnProperty('All') &&
            api != null &&
            api.map((item, key) => (
              <Card
                key={key}
                id={item.id}
                handleSpecificGame={handleSpecificGame}
                title={item.title}
                thumbnail={item.thumbnail}
                short_description={item.short_description}
                game_url={item.game_url}
                genre={item.genre}
                platform={item.platform}
                developer={item.developer}
                release_date={item.release_date}
              />
            ))
          }
        </MainContentApiAll>

        {state && state.hasOwnProperty('Platform') &&
          <PlatformContainer>
            <PlatformHeader>
              <h4>Selecione a sua plataforma</h4>
              <div>
                <select value={options} onChange={e => setOptions(e.target.value)}>
                  <option>all</option>
                  <option>pc</option>
                  <option>browser</option>
                </select>
                <button onClick={handleCallApiPlatform}>Pesquisar</button>
              </div>
            </PlatformHeader>

            {loading ? <Spinner /> :
              <PlatformApi>
                {apiPlatform.map((item, key) => (
                  <Card
                    key={key}
                    id={item.id}
                    handleSpecificGame={handleSpecificGame}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    short_description={item.short_description}
                    game_url={item.game_url}
                    genre={item.genre}
                    platform={item.platform}
                    developer={item.developer}
                    release_date={item.release_date}
                  />
                ))}
              </PlatformApi>
            }
          </PlatformContainer>
        }

        {state && state.hasOwnProperty('Specific game') &&
          specificGame.length !== 0 &&
          <CardSpecificGame
            key={title}
            title={title}
            thumbnail={thumbnail}
            short_description={short_description}
            description={description}
            game_url={game_url}
            genre={genre}
            platform={platform}
            developer={developer}
            release_date={release_date}
            minimum_system_requirements={minimum_system_requirements}
            screenshots={screenshots}
          />
        }
      </MainContent>
    </MainContainer>
  );
}