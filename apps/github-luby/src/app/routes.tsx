import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TabNavigation from './components/tab-navigation/tab-navigation'
import GlobalStyle from './globalStyles'
import Followers from './pages/followers/followers'
import Following from './pages/following/following'
import GuestProfile from './pages/guest-profile/guest-profile'
import Home from './pages/home/home'
import Repos from './pages/repos/repos'
import UserProfile from './pages/user-profile/user-profile'
import ProtectedRoute from './ProtectedRoute'
import { UserProvider } from './UserContext'

const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
    
          <UserProvider>

            <GlobalStyle />

            <Route path="/" exact component={Home} />
            <Route path="/:id/guest">
                <ProtectedRoute component={GuestProfile} />
            </Route>
            <Route path="/:id/profile">
                <ProtectedRoute component={UserProfile} />
            </Route>
            <Route path="/:id/repos">
                <ProtectedRoute component={Repos} />
            </Route>
            <Route path="/:id/followers">
                <ProtectedRoute component={Followers} />
            </Route>
            <Route path="/:id/following">
                <ProtectedRoute component={Following} />
            </Route>
            
          </UserProvider>

        </Switch>
    </BrowserRouter>
    )
}

export default Routes