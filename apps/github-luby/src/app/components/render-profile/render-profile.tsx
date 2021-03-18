import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { styles } from '../../common/styles';
import YellowThing from '../yellow-thing/yellow-thing';

/* eslint-disable-next-line */
export interface RenderProfileProps {}

const StyledRenderProfile = styled.div`
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

      a{
        text-decoration: none;
        color: var(--white);
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
  
}
`;

export function RenderProfile({user, mainProfile}) {
  return (
    <StyledRenderProfile>
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
          {mainProfile ? 
          <>
            <div>
              <Link to={{pathname: `/${user.id}/followers`}}>
                <strong>{user.followers}</strong>
              </Link>
              <span>Seguidores</span>
            </div>

            <div>
              <Link to={{pathname: `/${user.id}/following`}}>
                <strong>{user.following}</strong>
              </Link>
              <span>Seguindo</span>
            </div>

            <div>
              <Link to={{pathname: `/${user.id}/repos`}}>
                <strong>{user.public_repos}</strong>
              </Link>
              <span>Repos</span>
            </div>
          </>
          :
          <>
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
          </>
          }
          
        </article>

        <article className="bio">

          <YellowThing />

          <div>
            <span className="name">bio</span>
            <span className="info">{user.bio}</span>
          </div>

        </article>
      </section>
    </StyledRenderProfile>
  );
}

export default RenderProfile;
