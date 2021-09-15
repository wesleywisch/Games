import { useEffect, useState } from 'react';

import { Api } from '../../Services/api';
import { Card } from '../Card';
import { CardSpecificGame } from '../CardSpecificGame';

import {
  MainContainer,
  MainSidebar,
  MainSidebarContent,
  MainSidebarItem,
  MainContent,
  MainContentItem,
  MainContentTwo,
} from './styles';

export function Main() {
  const [state, setState] = useState({ 'All': 'All' });
  const [specificGame, setSpecificGame] = useState([])
  const [api, setApi] = useState([]);

  const buttons = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Platform' },
    { id: 3, name: 'Specific game' },
  ];

  async function handleCallApi() {
    const storage = localStorage.getItem('@api');

    if (!storage) {
      const response = await Api.get('/games');

      localStorage.setItem('@api', JSON.stringify(response.data));
      console.log(response.data);
      setApi(response.data);
    }

    setApi(JSON.parse(storage));
  }

  function handleOpenContainer(container) {
    setState({ [container]: container });
  }

  async function handleSpecificGame(id) {
    const storage = localStorage.getItem('@specific');

    const verifyIdApi = api.filter(api => api.id === id);

    const verifyIdStorage = storage !== verifyIdApi

    if (verifyIdStorage) {
      const response = await Api.get(`/game?id=${id}`);

      localStorage.setItem('@specific', JSON.stringify(response.data));

      setSpecificGame(response.data);
      setState({ 'Specific game': 'Specific game' })
    }
  }

  useEffect(() => {
    handleCallApi();
  }, [])

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
        <MainContentTwo>
          {state && state.hasOwnProperty('All') &&
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
            ))}
        </MainContentTwo>

        {state && state.hasOwnProperty('Platform') && <MainContentItem><h1>Platform</h1></MainContentItem>}

        {state && state.hasOwnProperty('Specific game') && specificGame !== 0 &&
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
            minimum_system_requirements={[minimum_system_requirements]}
            screenshots={screenshots}
          />
        }
      </MainContent>
    </MainContainer>
  );
}