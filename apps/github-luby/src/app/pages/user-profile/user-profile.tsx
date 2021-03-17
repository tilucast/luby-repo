import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';

import styled from 'styled-components';
import {ReactComponent as ExitIcon} from '../../../assets/exit.svg'
import { styles } from '../../common/styles';
import YellowThing from '../../components/yellow-thing/yellow-thing';
import { UserContext } from '../../UserContext';

const StyledUserProfile = styled.div`
  height: 100%;

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 2rem;

    h3{
      font-size: 2rem;
    }

    a{
      font-size: 20px;
      color: var(--white);
      text-decoration: none;
      font-weight: 300;

      display: flex;
      align-items: center;

      &:hover{
        cursor: pointer;
      }

      svg{
        width: 3.2rem;
        fill: var(--red);
        margin-left: 5px;
      }
    }
  }

  section{
    display: grid;
    place-items: center;

    ${styles}

    img{
      width: 16rem;
      height: 16rem;
      border-radius: 100%;
      border: 4px solid var(--white);
    }

    article.user-info{
      display: flex;

      justify-self: start;
      margin: 4rem 0;
    }

    article.user-info > div{

      span{
        display: block;
      }

    }

    article.github-info {
      width: 100%;
      background-color: var(--dark-gray);
      padding: 2rem;

      display: flex;
      justify-content: center;

      div{

        min-width: 7rem;

        &:not(:last-child){
          margin-right: 3rem;
        }
        
        display: flex;
        align-items: center;
        flex-direction: column;

        strong{
          font-size: 3rem;
        }

        span{
          font-size: 1.5rem;
        }
      }

    }

    article.bio{
      display: flex;
      padding: 4rem 0;
      
      justify-self: start;

      div {
        span{
          display: block;
        }
      }
    }

    .dull-container{
      display: flex;
      flex-direction: column;
    }
    
  }
  
`;

export function UserProfile() {
  const history = useHistory()
  
  const [user, setUser] = useContext(UserContext)
  
  const exitApp = () => {
    history.push("")
    setUser(null)
  }
  
  return (
    <StyledUserProfile>
      <nav>
        <h3>#{user.login}</h3>

        <a onClick={exitApp}>
          Sair
          <ExitIcon />
        </a>
      </nav>

      <section>
        <img src={user.avatar_url} alt=""/>

        <article className="user-info">

          <YellowThing />

          <div>
            <span className="name">{user.name}</span>
            <span className="info">{user.email || ''}</span>
            <span className="info">{user.location}</span>
          </div>

        </article>

        <article className="github-info">
          <div>
            <strong>{user.followers}</strong>
            <span>Seguidores</span>
          </div>

          <div>
            <strong>{user.following}</strong>
            <span>Seguindo</span>
          </div>

          <div>
            <strong>{user.public_repos}</strong>
            <span>Repos</span>
          </div>
        </article>

        <article className="bio">

          <YellowThing />

          <div>
            <span className="name">bio</span>
            <span className="info">{user.bio}</span>
          </div>

        </article>
      </section>

    </StyledUserProfile>
  );
}

export default UserProfile;
