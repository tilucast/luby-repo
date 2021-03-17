import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';

import styled from 'styled-components';
import {ReactComponent as ExitIcon} from '../../../assets/exit.svg'
import { UserContext } from '../../UserContext';

const StyledUserProfile = styled.div`
  

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;

    h3{
      font-size: 20px;
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
        width: 32px;
        fill: var(--red);
        margin-left: 5px;
      }
    }
  }

  section{
    display: grid;
    place-items: center;

    .name{
      font-size: 32px;
      color: var(--white);
      font-weight: bold;
      text-transform: uppercase;
    }

    .info{
      font-size: 20px;
      color: var(--light-gray);
    }

    img{
      width: 160px;
      height: 160px;
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
          font-size: 1rem;
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

    .yellow-thing{
      width: 15px;
      height: 40px;
      border-radius: 0 8px 8px 0;
      background-color: var(--yellow);
      margin-right: 20px;
    }
  }
  
`;

export function UserProfile() {
  const location = useLocation()
  const history = useHistory()
  
  const [user, setUser] = useContext(UserContext)

  const exitApp = () => {
    history.push("")
    setUser({})
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

          <div className="yellow-thing">

          </div>

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

          <div className="yellow-thing">

          </div>

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
