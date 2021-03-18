import React from 'react';

import styled from 'styled-components';
import YellowThing from '../yellow-thing/yellow-thing';
import {ReactComponent as ArrowRight} from '../../../assets/arrowright.svg'
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface UserTileProps {}

const StyledUserTile = styled.div`
  width: 100%;
  article{
    display: flex;
    padding: 2rem 1.5rem 2rem 0;

    border-bottom: 1px solid var(--dark-gray);
    width: 100%;

    transition: all .2s;

      &:hover{
        background-color: rgb(128, 128, 128);
      }

    > div{
      align-self: center;
    }

    .dull-container{

      width: 100%;

      a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        text-decoration: none
        
      }

      a > div{
        display: flex;
        align-items: center;

        img{
          width: 8rem;
          height: 8rem;
          border-radius: 100%;
          border: 3px solid var(--white);
          margin-right: 2rem;
        }
      
        span{
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--white);
        }
      }

      svg{
        width: 4rem;
        height: 4rem;

        path{
          fill: var(--white);
        }
      }
    }
  }
`;

export function UserTile({userObject}) {
  return (
    <StyledUserTile>
      <article>
          <YellowThing />

          <div className="dull-container">
          <Link to={{pathname: `/${userObject.id}/guest`, state: {userObject}}}>
              <div>
                <img src={userObject.avatar_url} alt="userObject"/>
                <span>#{userObject.login}</span>
              </div>
              
              <ArrowRight />
            </Link>
          </div>
      </article>
    </StyledUserTile>
  );
}

export default UserTile;
