import { useState } from 'react';

import { Api } from '../../Services/api';

import { 
  MainContainer, 
  MainSidebar, 
  MainSidebarContent, 
  MainSidebarItem, 
  MainContent, 
  MainContentItem,
} from './styles';

export function Main() {
  const [state, setState] = useState({ 'All': 'All' });

  const buttons = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Platform' },
    { id: 3, name: 'Specific game' },
  ];

  async function handleCallApi(){
    await Api.get('/games').then(response => console.log(response.data));
  }

  function handleOpenContainer(container, type) {
    setState({ [container]: container });
  }

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
        {state && state.hasOwnProperty('All') && <MainContentItem><h1>all</h1></MainContentItem>}
        {state && state.hasOwnProperty('Platform') && <MainContentItem><h1>Platform</h1></MainContentItem>}
        {state && state.hasOwnProperty('Specific game') && <MainContentItem><h1>Specific game</h1></MainContentItem>}
      </MainContent>
    </MainContainer>
  );
}