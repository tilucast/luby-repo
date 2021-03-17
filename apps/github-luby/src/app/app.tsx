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
import ProtectedRoute from './ProtectedRoute';
import GlobalStyle from './globalStyles';

const StyledApp = styled.div`
  
`;

const UserScreens = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/:id/profile">
          <UserProfile />
          <TabNavigation />
        </Route>

        <Route path="/:id/repos">
          <ProtectedRoute component={Repos} />
          <TabNavigation />
        </Route>

        <Route path="/:id/followers">
          <Followers />
          <TabNavigation />
        </Route>

        <Route path="/:id/following">
          <Following />
          <TabNavigation />
        </Route>

        <Route path="/" exact>
          <App />
        </Route>

      </Switch>

    </BrowserRouter>
  )
}

export function App() {
  return (
    <BrowserRouter>

        <GlobalStyle />
        <Switch>

          <UserProvider>
            
            
            <Route path="/:id/profile">
              <ProtectedRoute component={UserScreens} />
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>

          </UserProvider>

        </Switch>
      
    </BrowserRouter>
  );
}

export default App;
