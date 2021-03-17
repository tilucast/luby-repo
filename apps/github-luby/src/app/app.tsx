import React from 'react';
import styled from 'styled-components';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/home';
import UserProfile from './pages/user-profile/user-profile';
import Repos from './pages/repos/repos';
import Followers from './pages/followers/followers';
import Following from './pages/following/following';
import TabNavigation from './components/tab-navigation/tab-navigation';
import { UserProvider } from './UserContext';

const StyledApp = styled.div`
  
  --dark: rgb(41, 41, 41);
  --yellow: rgb(255, 206, 0);
  --red: rgb(208, 52, 52);
  --white: rgb(255, 255, 255);
  --green: rgb(99, 191, 31);
  --dark-gray: rgb(56, 56, 56);
  --light-gray: rgb(201, 201, 201);

  background-color: var(--dark);
  color: var(--white);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  },

  html {
    font-size: 62.5%;
   
  },

  body, html{
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }
  
`;

const UserScreens = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/:id/profile">
          <UserProfile />
        </Route>

        <Route path="/:id/repos">
          <Repos />
        </Route>

        <Route path="/:id/followers">
          <Followers />
        </Route>

        <Route path="/:id/following">
          <Following />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

      </Switch>

      <TabNavigation />
    </BrowserRouter>
  )
}

export function App() {
  return (
    <BrowserRouter>

      <StyledApp>
        <Switch>

          <UserProvider>
            
            <Route path="/:id/profile">
              <UserScreens />
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>

          </UserProvider>

        </Switch>
      </StyledApp>

    </BrowserRouter>
  );
}

export default App;
