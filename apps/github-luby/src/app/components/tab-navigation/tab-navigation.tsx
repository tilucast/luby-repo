import React, { useContext } from 'react';

import styled from 'styled-components';

import {ReactComponent as HomeIcon} from '../../../assets/home-solid.svg'
import {ReactComponent as GithubIcon} from '../../../assets/github-brands.svg'
import {ReactComponent as FriendsIcon} from '../../../assets/user-friends-solid.svg'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const StyledTabNavigation = styled.div`
  color: var(--light-gray);
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 16px 16px 0 0;
  max-height: 10vh;

  svg{
    width: 5rem;
  }

  article a{
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .2s;
    text-decoration: none;
    color: var(--light-gray);

    &:hover{
      color: var(--dark);
      cursor: pointer;
    }

    span{
      font-size: 18px;
    }
  }
`;

export function TabNavigation() {

  const [user] = useContext(UserContext)

  return (
    <StyledTabNavigation>
      <article>
        <NavLink to={{pathname: `/${user.id}/profile`}} activeStyle={{color: 'var(--dark)'}}>
          <HomeIcon />
          <span>Home</span>
        </NavLink>
      </article>

      <article>
        <NavLink to={{pathname: `/${user.id}/repos`}} activeStyle={{color: 'var(--dark)'}}>
          <GithubIcon />
          <span>Repos</span>
        </NavLink>
        
      </article>

      <article>
        <NavLink to={{pathname: `/${user.id}/followers`}} activeStyle={{color: 'var(--dark)'}}>
          <FriendsIcon />
          <span>Seguidores</span>
        </NavLink>
      </article>

      <article>
        <NavLink to={{pathname: `/${user.id}/following`}} activeStyle={{color: 'var(--dark)'}}>
          <FriendsIcon />
          <span>Seguindo</span>
        </NavLink>
      </article>
    </StyledTabNavigation>
  );
}

export default TabNavigation;
